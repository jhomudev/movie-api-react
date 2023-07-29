import React from 'react'
import { FaRegRectangleList, FaGripVertical } from 'react-icons/fa6'

function TopBar ({ handleSort, limit }) {
  return (
    <div className='flex items-center flex-wrap-reverse gap-3 py-2 text-sm border-y-[1px] border-c_blue-gray'>
      <label>
        Encontrados: <span className='text-c_blue-light'>&nbsp;{limit}</span> películas en total
      </label>
      <div className='sort ml-0 lg:ml-auto flex items-center whitespace-nowrap'>
        Ordenar por: &nbsp;&nbsp;&nbsp;
        <div className='w-[clamp(200px,100%,250px)] px-3 border-x-[1px] border-c_blue-gray'>
          <select onChange={handleSort} defaultValue='year.decr' className='w-max px-2 bg-transparent text-c_white-normal' id='moviesForPage'>
            <option className='text-c_blue-semidark' value='year.decr'>Año descendente</option>
            <option className='text-c_blue-semidark' value='year.incr'>Año ascendente</option>
          </select>
        </div>
        <div className='list px-3  cursor-pointer hover:text-c_yellow-lima'><FaRegRectangleList /></div>
        <div className='grilla px-3  cursor-pointer hover:text-c_yellow-lima border-l-2 border-l-c_blue-gray '><FaGripVertical /></div>
      </div>
    </div>
  )
}

export default TopBar
