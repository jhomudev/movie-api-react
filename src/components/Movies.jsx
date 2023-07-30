import React from 'react'
import { FaCaretRight, FaStar } from 'react-icons/fa6'

function MovieResultsGrid ({ movies }) {
  return (
    <main className='main px-3 grid gap-6 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]'>
      {
        movies.map((movie) => (
          <article key={movie.id} className='movie group w-full text-left flex flex-col gap-2 font-dosis'>
            <div className='imgBox relative grid place-items-center w-full h-[80%] min-h-[19em] object-fill rounded-md overflow-hidden'>
              <img className='absolute w-full h-full group-hover:opacity-70 transition-all ease-in-out duration-700' src={movie.img} alt={movie.caption} />
              <button className='opacity-0 group-hover:opacity-100 bg-c_red-normal p-2 rounded-full uppercase cursor-pointer z-10 transition-all ease-in-out duration-700 text-sm font-semibold flex gap-1 items-center'>Go to movie <FaCaretRight /></button>
            </div>
            <strong className='text-sm font-semibold font-dosis group-hover:text-c_yellow-lima uppercase line-clamp-1'><a href=''>{movie.title}</a></strong>
            <p className='text-base text-c_red-normal flex gap-1'>
              {movie.type}
              <span className='text-c_yellow-gold'> ({movie.year})</span>
            </p>
          </article>
        ))
      }
    </main>
  )
}

function MovieResultsList ({ movies }) {
  return (
    <main className='grid gap-10'>
      {
        movies.map((movie) => (
          <article key={movie.id} className='group w-full flex flex-col sm:flex-row gap-5 justify-center items-start text-c_white-blue text-sm'>
            <div className='imgBox mx-auto w-4/12 min-w-[180px] h-full min-h-[260px] max-h-[290px]'>
              <img className='w-full h-full object-fill rounded-md' src={movie.img} alt={movie.caption} />
            </div>
            <div className='info flex flex-col gap-3'>
              <div className='top-part grid gap-1'>
                <strong className='font-dosis text-base text-c_white-blue font-semibold uppercase line-clamp-1'><a className='text-c_white-normal group-hover:text-c_yellow-lima' href=''>{movie.title}</a> ({movie.year})</strong>
                <div className='rating flex items-center gap-1 text-xs'>
                  <FaStar className='text-c_yellow-gold text-lg mb-1' /> <span className='text-c_white-normal text-base'>8.1</span> / 10
                </div>
                <p className='descri'>
                  Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
                </p>
              </div>
              <span className='border-t-c_blue-gray border-t-[1px] my-4' />
              <div className='bottom-part grid gap-1'>
                <p>Run Time: 2h21’ . MMPA: PG-13 . Release: 1 May 2015</p>
                <p>Director: <span className='text-c_blue-light'>Joss Whedon</span></p>
                <p>Stars: <span className='text-c_blue-light'>Robert Downey Jr., Chris Evans, Chris Hemsworth</span></p>
              </div>
            </div>
          </article>
        ))
      }
    </main>
  )
}

function NoMovieResults () {
  return (
    <div className='grid gap-3 place-items-center'>
      <img className='w-[min(100%,200px)]' src='https://cdn-icons-png.flaticon.com/512/11026/11026471.png' alt='box empty' />
      <p>No se encontraron resultados</p>
    </div>
  )
}

export function Movies ({ movies, view, search }) {
  const hasMovies = movies.length > 0
  const viewMovies = view === 'list' ? <MovieResultsList movies={movies} /> : <MovieResultsGrid movies={movies} />
  return hasMovies ? viewMovies : <NoMovieResults search={search} />
}
