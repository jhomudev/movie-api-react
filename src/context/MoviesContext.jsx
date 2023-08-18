import React, { createContext, useState, useRef, useCallback } from 'react'
import { useParams } from '../hooks/useParams'
import { searchMovies } from '../services/movies'

export const MoviesContext = createContext()

export function MoviesProvider ({ children }) {
  const { params, setParams } = useParams()
  const [movies, setMovies] = useState([])
  const [view, changeView] = useState('list')
  const previousSearch = useRef(params.search)
  const previousPage = useRef('')
  const previousLimit = useRef('')
  const previousSort = useRef('')
  const previousEndYear = useRef('')
  const previousStartYear = useRef('')

  const [hasNextPage, changeHasNextPage] = useState(false)

  const getMovies = useCallback(
    async ({ search, page, sort, limit, startYear, endYear }) => {
      const toPage = previousSearch.current !== search ? 1 : page
      const validatePrevious = (previousSearch.current === search &&
        previousPage.current === page &&
        previousLimit.current === limit &&
        previousSort.current === sort &&
        previousEndYear.current === endYear &&
        previousStartYear.current === startYear
      )

      if (validatePrevious) return

      const { hasNext, moviesFound } = await searchMovies({ keyword: search, page: toPage, sort, limit, startYear, endYear })
      setParams({ search, page, sort, limit, startYear, endYear })
      setMovies(moviesFound)

      previousSearch.current = search
      previousPage.current = page
      previousLimit.current = limit
      previousSort.current = sort
      previousEndYear.current = endYear
      previousStartYear.current = startYear

      changeHasNextPage(hasNext)
    }, []
  )

  return (
    <MoviesContext.Provider value={{
      movies,
      view,
      changeView,
      getMovies,
      hasNextPage
    }}
    >
      {children}
    </MoviesContext.Provider>
  )
}
