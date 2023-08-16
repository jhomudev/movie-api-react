import { useState } from 'react'

function usePager () {
  const [page, changePage] = useState(1)
  return { page, changePage }
}

export default usePager
