import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'

function Pager ({ search, nowPage, getMovies, hasNextPage, params }) {
  const { limit, setLimit, page, sort, startYear, endYear } = params
  const hasPreviousPage = nowPage > 1

  function handleChangePage (toPage) {
    if (hasNextPage || hasPreviousPage) getMovies({ search, page: toPage, limit, sort, endYear, startYear })
  }

  function handleLimit (e) {
    const limitValue = e.target.value
    setLimit(limitValue)
    getMovies({ search, page, limit: limitValue, sort, endYear, startYear })
  }

  return (
    <div className='flex gap-2 flex-wrap items-center py-2 text-sm text-c_white-blue border-y-[1px] border-c_blue-gray'>
      <label htmlFor='moviesForPage' className='pr-5'>Resultados por página</label>
      <div className='w-[clamp(140px,100%,170px)] px-2 border-x-[1px] border-c_blue-gray'>
        <select onChange={handleLimit} defaultValue={limit} className='w-full indent-2 bg-transparent text-c_white-normal' id='moviesForPage'>
          <option className='text-c_blue-semidark' value={5}>5 películas</option>
          <option className='text-c_blue-semidark' value={10}>10 películas</option>
          <option className='text-c_blue-semidark' value={15}>15 películas</option>
          <option className='text-c_blue-semidark' value={20}>20 películas</option>
        </select>
      </div>
      <div className='flex gap-4 mx-auto md:m-[0_0_0_auto]'>
        <button onClick={() => { handleChangePage(nowPage - 1) }} className={`flex items-center hover:text-c_yellow-lima ${hasPreviousPage ? '' : 'hidden'}`}><FaCaretLeft /> Anterior</button>
        <span>Página <strong className='text-c_yellow-lima'>{nowPage}</strong></span>
        <button onClick={() => { handleChangePage(nowPage + 1) }} className={`flex items-center hover:text-c_yellow-lima ${hasNextPage ? '' : 'hidden'}`}>Siguiente <FaCaretRight /></button>
      </div>
    </div>
  )
}

export default Pager
