import React from 'react'

export default function Buttons ({ type, text, bg, fg = 'white', onclick }) {
  return (
    <button
      onClick={onclick}
      type={type}
      className='py-2 px-3 grid place-items-center rounded-sm hover:brightness-90'
      style={{
        backgroundColor: bg,
        color: fg
      }}
    >
      {text}
    </button>
  )
}
