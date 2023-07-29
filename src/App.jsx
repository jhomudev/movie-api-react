import './App.css'
import { FaSistrix } from 'react-icons/fa6'
import { EntryGroup, EntryGroupManual } from './components/Entries'
import Buttons from './components/Buttons'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { useEffect } from 'react'
import Pager from './components/Pager'
import usePager from './hooks/usePager'
import { useParams } from './hooks/useParams'
import TopBar from './components/TopBar'

function App () {
  const { search, updateSearch } = useSearch()
  const { page, changePage } = usePager()
  const { movies, getMovies, hasNextPage } = useMovies({ search, changePage })
  const { limit, setLimit, sort, setSort, endYear, setEndYear, setStartYear, startYear } = useParams()

  function handleSubmit (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const formObject = Object.fromEntries(formData)
    setEndYear(formObject.endYear)
    setStartYear(formObject.startYear)
    getMovies({ search, page, limit, sort, endYear: formObject.endYear, startYear: formObject.startYear })
  }

  function handleChange (e) {
    const newSearch = e.target.value
    updateSearch(newSearch)
  }

  function handleSort (e) {
    const sortValue = e.target.value
    setSort(sortValue)
    console.log(sortValue)
    getMovies({ search, page, limit, sort: sortValue, endYear, startYear })
  }

  useEffect(() => { getMovies({ search, page, limit, sort, endYear, startYear }) }, [])

  return (
    <>
      <div className='w-full min-h-screen main-container bg-c_dark font-nunito text-c_white-normal'>
        <div
          className='h-[380px] flex flex-col justify-center items-center'
          style={{
            backgroundImage: 'url(/img/user-hero-bg.jpg)',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <header className='font-dosis uppercase font-semibold w-full py-10 px-2 grid gap-3 place-items-center'>
            <div className='header-content container mx-auto flex gap-3 items-center justify-center'>
              <img className='w-10' src='logo.svg' alt='logo devmc' />
              <h1 className='text-3xl'>Movie Finder</h1>
            </div>
            <p className='font-normal'>Busca tus películas</p>
          </header>
          <div className='finder w-[min(100%,400px)] py-2 px-3 text-base'>
            <form onSubmit={handleSubmit} className='container mx-auto py-1 px-3 flex items-center justify-between flex-nowrap w-[min(100%,400px)] bg-white rounded-full'>
              <input onChange={handleChange} name='keyword' className='w-full bg-transparent outline-none indent-2' type='search' placeholder='Escribe el nombre de la película' />
              <button className='p-2 rounded-full outline-c_white-semidark text-c_blue-semidark hover:bg-c_white-semidark'><FaSistrix /></button>
            </form>
          </div>
        </div>
        <br />
        <div className='container mx-auto p-5 flex gap-8 text-c_white-semidark font-light'>
          <section className='w-full grid gap-10'>
            <TopBar handleSort={handleSort} limit={limit} />
            <main className='main px-3 grid gap-6 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]'>
              <Movies movies={movies} />
            </main>
            <Pager
              search={search} nowPage={page} getMovies={getMovies}
              params={{ setLimit, limit, page, sort, startYear, endYear }} hasNextPage={hasNextPage}
            />
          </section>

          <aside className='hidden lg:block w-[clamp(300px,100%,450px)]'>
            <h2 className='title-section'>Busca tu película</h2>
            <form className='bg-c_blue-dark p-4 grid gap-3' onSubmit={handleSubmit}>
              <EntryGroup label='Nombre de la película' name='keyword' onChange={handleChange} />
              <EntryGroup label='Género' />
              <EntryGroupManual label='Por año'>
                <div className='flex gap-4 justify-between'>
                  <input name='startYear' className='flex-1 p-2 text-sm text-c_white-semidark bg-c_blue-semidark rounded-sm' type='number' min={1990} max={new Date().getFullYear()} placeholder='De:' />
                  <input name='endYear' className='flex-1 p-2 text-sm text-c_white-semidark bg-c_blue-semidark rounded-sm' type='number' min={1990} max={new Date().getFullYear()} placeholder='A:' />
                </div>
              </EntryGroupManual>
              <Buttons text='BUSCAR' bg='var(--c_red-normal)' type='submit' />
            </form>
          </aside>
        </div>
      </div>
    </>
  )
}

export default App
