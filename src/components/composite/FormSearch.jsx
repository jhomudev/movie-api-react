import React from 'react'
import { EntryGroup, EntryGroupManual } from './../elements/Entries'
import Buttons from './../elements/Buttons'

function FormSearch ({ handleChange, handleSubmit }) {
  return (
    <aside className='hidden lg:block w-[clamp(300px,100%,450px)]'>
      <h2 className='title-section'>Busca tu película</h2>
      <form className='bg-c_blue-dark p-4 grid gap-3' onSubmit={handleSubmit}>
        <EntryGroup label='Nombre de la película' name='keyword' onChange={handleChange} />
        <EntryGroup label='Género' />
        <EntryGroupManual label='Por año'>
          <div className='flex gap-4 justify-between'>
            <input name='startYear' className='flex-1 p-2 text-sm text-c_white-semidark bg-c_blue-semidark rounded-sm' type='number' min={1990} max={new Date().getFullYear()} placeholder='De:' />
            <input name='endYear' className='flex-1 p-2 text-sm text-c_white-semidark bg-c_blue-semidark rounded-sm' type='number' min={1990} max={new Date().getFullYear()} placeholder='A:' />
          </div>
        </EntryGroupManual>
        <Buttons text='BUSCAR' bg='var(--c_red-normal)' type='submit' />
      </form>
    </aside>
  )
}

export default FormSearch
