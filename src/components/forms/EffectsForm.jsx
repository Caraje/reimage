import React, { useState } from 'react'

const EffectsForm = () => {
  const [isEffectsOpen, setIsEffectsOpen] = useState(false)

  return (
    <div className='flex flex-col items-start gap-3 w-full'>
      <div onClick={() => { setIsEffectsOpen(!isEffectsOpen) }} className='flex w-full justify-between   hover:cursor-pointer'>
        <h3 className='w-5/6 text-2xl text-[#fbed21] font-extrabold'>Effects</h3>
        <button>{!isEffectsOpen
          ? <img className='w-4' src='./static_img/icons/iconUp.svg' alt='Icon arrow up' />
          : <img className='w-4' src='./static_img/icons/iconDown.svg' alt='Icon arrow down' />}
        </button>
      </div>
      <div className={`w-full flex flex-col gap-4 ${!isEffectsOpen ? 'hidden' : ''}`}>

        <label className='flex flex-col font-bold text-xs w-full'>
          Blur:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='blur'
            type='number'
            min={1}
            max={2000}
            placeholder='1 to 2000'
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Sepia:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='sepia'
            type='number'
            min={1}
            max={100}
            placeholder='1 to 100'
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Oil Paint:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='oilPaint'
            type='number'
            min={1}
            max={100}
            placeholder='1 to 100'
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Pixelate:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='pixelate'
            type='number'
            min={1}
            max={200}
            placeholder='1 to 200'
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Colorize:
          <div
            className=' flex gap-3'
          >

            <input
              className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4 w-4/5'
              name='colorizeLevel'
              type='number'
              min={1}
              max={100}
              placeholder='1 to 100'
            />
            <input
              className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl w-1/5'
              name='colorizeColor'
              type='color'
            />
          </div>
        </label>
        <label
          className='flex flex-col font-bold text-xs w-full'
        >
          Simulate Colorblind:
          <select className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-lg ' name='colorblind'>
            <option value=''>None</option>
            <option value='deuteranopia'>Deuteranopia</option>
            <option value='protanopia'>Protanopia</option>
            <option value='tritanopia'>Tritanopia</option>
            <option value='tritanomaly'>Tritanomaly</option>
            <option value='deuteranomaly'>Deuteranomaly</option>
            <option value='cone_monochromacy'>Cone_Monochromacy</option>
            <option value='rod_monochromacy'>Rod_Monochromacy</option>
          </select>
        </label>

      </div>
    </div>
  )
}

export default EffectsForm
