import React from 'react'
import { FaCaretRight } from 'react-icons/fa6'

function MovieResults ({ movies }) {
  return movies.map((movie) => (
    <article key={movie.id} className='movie group w-full text-left flex flex-col gap-2 font-dosis'>
      <div className='imgBox relative grid place-items-center w-full h-[80%] min-h-[18em] object-fill rounded-md overflow-hidden'>
        <img className='absolute w-full h-full group-hover:opacity-70 transition-all ease-in-out duration-700' src={movie.img} alt={movie.caption} />
        <button className='opacity-0 group-hover:opacity-100 bg-c_red-normal p-2 rounded-full uppercase cursor-pointer z-10 transition-all ease-in-out duration-700 text-sm font-semibold flex gap-1 items-center'>Go to movie <FaCaretRight /></button>
      </div>
      <strong className='text-sm font-semibold group-hover:text-c_yellow-lima uppercase line-clamp-1'><a href=''>{movie.title}</a></strong>
      <p className='text-base text-c_red-normal flex gap-1'>
        {movie.type}
        <span className='text-c_yellow-gold'> ({movie.year})</span>
      </p>
    </article>
  ))
}

function NoMovieResults () {
  return (
    <div className='grid gap-3 place-items-center'>
      <img className='w-[min(100%,200px)]' src='https://cdn-icons-png.flaticon.com/512/11026/11026471.png' alt='box empty' />
      <p>No se encontraron resultados</p>
    </div>
  )
}

export function Movies ({ movies, search }) {
  const hasMovies = movies.length > 0
  return hasMovies ? <MovieResults movies={movies} /> : <NoMovieResults search={search} />
}
