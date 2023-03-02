import React, { useState } from 'react'

const AdjustsFormComponent = () => {
  const [isAdjustOpen, setIsAdjustOpen] = useState(false)

  return (
    <div className='flex flex-col items-start gap-3 w-full '>
      <div onClick={() => { setIsAdjustOpen(!isAdjustOpen) }} className='flex w-full hover:cursor-pointer'>
        <h3 className='w-5/6 text-2xl text-[#fbed21] font-extrabold'>Adjusts</h3>
        <button
          className=' w-1/6  text-slate-900 p-1 rounded-lg'
        >{!isAdjustOpen
          ? <img className='w-4' src='./static_img/icons/iconUp.svg' alt='Icon arrow up' />
          : <img className='w-4' src='./static_img/icons/iconDown.svg' alt='Icon arrow down' />}
        </button>
      </div>
      <div className={`w-full flex flex-col gap-4 ${!isAdjustOpen ? 'hidden' : ''}`}>

        <label className='flex flex-col font-bold text-xs w-full'>
          Improve:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='improve'
            type='number'
            min={0}
            max={100}
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Saturation:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='saturation'
            type='number'
            min={-100}
            max={100}
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Constrast:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='constrast'
            type='number'
            min={-100}
            max={100}
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Brightness:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='brightness'
            type='number'
            min={-99}
            max={100}
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Gamma:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='gamma'
            type='number'
            min={-100}
            max={100}
          />
        </label>
      </div>

    </div>
  )
}

export default AdjustsFormComponent
