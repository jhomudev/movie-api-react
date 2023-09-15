import { useEffect } from 'react'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useParams } from './hooks/useParams'
import { Movies } from './components/composite/Movies'
import Pager from './components/composite/Pager'
import TopBar from './components/composite/TopBar'
import FormSearch from './components/composite/FormSearch'
import MainSearch from './components/composite/MainSearch'
import bgImageMovie from './assets/img/user-hero-bg.jpg'

function App () {
  const { search, updateSearch } = useSearch()
  const { movies, view, getMovies } = useMovies()
  const { params } = useParams()
  const { page, limit, sort, endYear, startYear } = params

  function handleChange (e) {
    const newSearch = e.target.value
    updateSearch(newSearch)
  }

  function handleSubmit (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formObject = Object.fromEntries(formData)
    getMovies({ search, limit, page, sort, endYear: formObject.endYear, startYear: formObject.startYear })
  }

  useEffect(() => { getMovies({ search, page, limit, sort, endYear, startYear }) }, [])

  return (
    <>
      <div className='w-full min-h-screen main-container bg-c_dark font-nunito text-c_white-normal'>
        <div
          className='h-[380px] flex flex-col justify-center items-center'
          style={{
            backgroundImage: `url(${bgImageMovie})`,
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
          <MainSearch handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
        <br />
        <div className='container mx-auto p-5 flex gap-8 text-c_white-semidark font-light'>
          <section className='w-full grid gap-10'>
            <TopBar />
            <Movies movies={movies} view={view} />
            <Pager />
          </section>
          <FormSearch handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  )
}

export default App
