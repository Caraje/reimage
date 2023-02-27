import React from 'react'

const ResizeForm = ({ handleResize, resizing }) => {
  return (
    <form
      onSubmit={handleResize}
      className='flex flex-col w-full gap-4'
    >
      <h3 className='text-2xl text-[#fbed21] font-extrabold'>Dimensiones</h3>
      <label className='flex flex-col font-bold text-xs'>
        ANCHO:
        <input
          className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
          name='w'
          type='number'
          placeholder={resizing.w}
        />
      </label>
      <label className='flex flex-col font-bold text-xs'>
        ALTO:
        <input
          className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
          name='h'
          type='number'
          placeholder={resizing.h}
        />
      </label>
      <button className='w-full bg-[#fbed21] text-slate-900 p-1 rounded-lg'>Apply</button>
    </form>
  )
}

export default ResizeForm
