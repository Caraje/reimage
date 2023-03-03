import React, { useState } from 'react'

const OptionsForm = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  return (
    <div className='flex flex-col items-start gap-3 w-full'>
      <div onClick={() => { setIsOptionsOpen(!isOptionsOpen) }} className='flex w-full hover:cursor-pointer'>
        <h3 className='w-5/6 text-2xl text-[#fbed21] font-extrabold'>Options</h3>
        <button
          className=' w-1/6 text-slate-900 p-1 rounded-lg'
        >{!isOptionsOpen
          ? <img className='w-4' src='./static_img/icons/iconUp.svg' alt='Icon arrow up' />
          : <img className='w-4' src='./static_img/icons/iconDown.svg' alt='Icon arrow down' />}
        </button>
      </div>
      <div className={`w-full flex flex-col gap-4 ${!isOptionsOpen ? 'hidden' : ''}`}>

        <label
          className='flex flex-col font-bold text-xs w-full'
        >
          Format:
          <select
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-lg '
            name='format'
          >
            <option value=''>None</option>
            <option value='jpg'>JPG</option>
            <option value='png'>PNG</option>
            <option value='webp'>WEBP</option>
            <option value='bmp'>BMP</option>
            <option value='jxr'>JPEG XR</option>
            <option value='jp2'>JPEG 2000</option>
          </select>
        </label>
        <label
          className='flex flex-col font-bold text-xs w-full'
        >
          Quality:
          <select
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-lg '
            name='quality'
          >
            <option value=''>None</option>
            <option value='auto'>AUTO</option>
            <option value='90'>90</option>
            <option value='80'>80</option>
            <option value='70'>70</option>
            <option value='60'>60</option>
            <option value='50'>50</option>
          </select>
        </label>
        <div className='flex flex-col gap-2s items-start '>
          <label className='flex items-center gap-4 font-bold text-lg w-full'>
            Remove Background:
            <input
              className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4 '
              name='remove'
              type='checkbox'
              disabled
            />
          </label>
          <label className='flex items-center gap-4 font-bold text-lg w-full'>
            Grayscale:
            <input
              className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
              name='grayscale'
              type='checkbox'
            />
          </label>
          <label className='flex items-center gap-4 font-bold text-lg w-full'>
            Negative:
            <input
              className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
              name='negative'
              type='checkbox'
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default OptionsForm
