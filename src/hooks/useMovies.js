import { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'

export function useMovies () {
  const { movies, view, changeView, getMovies, hasNextPage } = useContext(MoviesContext)

  return { movies, view, changeView, getMovies, hasNextPage }
}
