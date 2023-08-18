import { useContext } from 'react'

import { ParamsContext } from '../context/ParamsContext'

export function useParams () {
  const { params, setParams } = useContext(ParamsContext)

  return { params, setParams }
}
