import React from 'react'
import { FaSistrix } from 'react-icons/fa6'

function MainSearch ({ handleChange, handleSubmit }) {
  return (
    <div className='finder w-[min(100%,400px)] py-2 px-3 text-base'>
      <form onSubmit={handleSubmit} className='container mx-auto py-1 px-3 flex items-center justify-between flex-nowrap w-[min(100%,400px)] bg-white rounded-full'>
        <input onChange={handleChange} name='keyword' className='w-full bg-transparent outline-none indent-2' type='search' placeholder='Escribe el nombre de la película' />
        <button className='p-2 rounded-full outline-c_white-semidark text-c_blue-semidark hover:bg-c_white-semidark'><FaSistrix /></button>
      </form>
    </div>
  )
}

export default MainSearch
