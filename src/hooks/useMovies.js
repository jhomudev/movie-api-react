import { useState, useRef, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, changePage }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)
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
      setMovies(moviesFound)

      changePage(toPage)

      previousSearch.current = search
      previousPage.current = page
      previousLimit.current = limit
      previousSort.current = sort
      previousEndYear.current = endYear
      previousStartYear.current = startYear

      changeHasNextPage(hasNext)
    }, []
  )

  return { movies, getMovies, hasNextPage }
}
