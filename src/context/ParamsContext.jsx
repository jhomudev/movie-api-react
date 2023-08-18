import React, { createContext, useState } from 'react'

export const ParamsContext = createContext()

export function ParamsProvider ({ children }) {
  const [params, setParams] = useState({ /* Those are the default values */
    search: null,
    page: 1,
    sort: 'year.decr',
    limit: 5,
    startYear: null,
    endYear: null
  })

  return (
    <ParamsContext.Provider value={{
      params, setParams
    }}
    >
      {children}
    </ParamsContext.Provider>
  )
}
