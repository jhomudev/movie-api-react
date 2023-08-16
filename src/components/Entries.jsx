import React from 'react'

const CLASS_GROUP = 'grid gap-2 font-nunito'
const CLASS_ENTRY = 'p-2 text-sm text-c_white-semidark bg-c_blue-semidark rounded-sm'

export function EntryDefault ({ children, type, name, placeholder = 'Escribe aquí', shouldSelect = false }) {
  return shouldSelect
    ? (
      <select className={CLASS_ENTRY} name={name} placeholder={placeholder}>
        {children}
      </select>
      )
    : (
      <input className={CLASS_ENTRY} name={name} type={type} placeholder={placeholder} />
      )
}

export function EntryGroup ({ label = 'Label', type, name, htmlFor, placeholder = 'Escribe aquí', shouldSelect = false, onChange, options }) {
  return (
    <div className={CLASS_GROUP}>
      <label className='font-dosis font-semibold text-sm text-c_white-normal' htmlFor={htmlFor}>{label}</label>
      {
        shouldSelect
          ? (
            <select onChange={onChange} className={CLASS_ENTRY} name={name}>
              {options}
            </select>
            )
          : (
            <input onChange={onChange} className={CLASS_ENTRY} name={name} id={htmlFor} type={type} placeholder={placeholder} />
            )
      }
    </div>
  )
}

export function EntryGroupManual ({ children, label = 'Label', addStyles }) {
  return (
    <div className={CLASS_GROUP}>
      <label className={`font-dosis font-semibold text-sm text-c_white-normal ${addStyles}`}>{label}</label>
      {children}
    </div>
  )
}
