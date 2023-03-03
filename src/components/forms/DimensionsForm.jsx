import React, { useState } from 'react'

const DimensionsForm = ({ size }) => {
  const [isDimensionsOpen, setIsDimensionsOpen] = useState(false)

  return (
    <div className=' flex flex-col items-start gap-3 w-full '>
      <div onClick={() => { setIsDimensionsOpen(!isDimensionsOpen) }} className='flex justify-between  w-full hover:cursor-pointer'>

        <h3 className='w-5/6 text-2xl text-[#fbed21] font-extrabold'>Dimensions</h3>
        <button>{!isDimensionsOpen
          ? <img className='w-4' src='./static_img/icons/iconUp.svg' alt='Icon arrow up' />
          : <img className='w-4' src='./static_img/icons/iconDown.svg' alt='Icon arrow down' />}
        </button>
      </div>
      <div className={`w-full flex flex-col gap-4 ${!isDimensionsOpen ? 'hidden' : ''}`}>

        <label className='flex flex-col font-bold text-xs w-full'>
          width:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='width'
            type='number'
            placeholder={size.width}
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Height:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='height'
            type='number'
            placeholder={size.height}
          />
        </label>
      </div>

    </div>
  )
}

export default DimensionsForm
