import React from 'react'

const ButtonsForm = () => {
  return (
    <div className=' flex gap-3 w-full mt-2'>
      <button
        className='
              w-full bg-[#fbed21] text-slate-900 p-1 rounded-lg font-bold
              hover:scale-105 hover:brightness-200 hover:shadow-2xl ease-in-out duration-300
            '
      >
        Apply
      </button>
      <button
        type='reset'
        className='
              w-full bg-[#fbed21] text-slate-900 p-1 rounded-lg font-bold
              hover:scale-105 hover:brightness-200 hover:shadow-2xl ease-in-out duration-300
            '
      >
        reset
      </button>

    </div>
  )
}

export default ButtonsForm
