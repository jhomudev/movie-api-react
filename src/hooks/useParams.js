import { useState } from 'react'

const DEFAULT_VALUES = {
  page: 1,
  limit: 5,
  startYear: null,
  endYear: null,
  sort: 'year.decr'
}

export function useParams () {
  const [limit, setLimit] = useState(DEFAULT_VALUES.limit)
  const [startYear, setStartYear] = useState(DEFAULT_VALUES.startYear)
  const [endYear, setEndYear] = useState(DEFAULT_VALUES.endYear)
  const [sort, setSort] = useState(DEFAULT_VALUES.sort)

  return { limit, setLimit, startYear, setStartYear, endYear, setEndYear, sort, setSort }
}
