import { useState } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')

  return { search, updateSearch }
}
