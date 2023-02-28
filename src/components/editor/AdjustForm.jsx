import React from 'react'

const AdjustForm = ({ adjusts, handleAdjusts }) => {
  return (
    <form
      onSubmit={handleAdjusts}
      className='flex flex-col items-center w-full gap-1'
    >
      <div className='flex flex-col items-start gap-1 '>
        <h3 className='text-2xl text-[#fbed21] font-extrabold'>Dimensions</h3>
        <label className='flex flex-col font-bold text-xs w-full'>
          width:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='width'
            type='number'
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Height:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='height'
            type='number'
          />
        </label>

      </div>
      <div className='flex flex-col items-start gap-1 w-full '>
        <h3 className='text-2xl text-[#fbed21] font-extrabold'>Adjusts</h3>
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
      <div className='flex flex-col items-start gap-1 w-full'>
        <h3 className='text-2xl text-[#fbed21] font-extrabold'>Efects</h3>
        <div className='flex gap-9 items-start'>
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
        <label className='flex flex-col font-bold text-xs w-full'>
          Blur:
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='blur'
            type='number'
            min={1}
            max={2000}
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
          />
        </label>
        <label className='flex flex-col font-bold text-xs w-full'>
          Colorize:
          <div
            className=' flex gap-1'
          >

            <input
              className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4 w-4/5'
              name='colorizeLevel'
              type='number'
              min={1}
              max={100}
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

      </div>
      <div className=' flex gap-3 w-full mt-2'>
        <button className='w-full bg-[#fbed21] text-slate-900 p-1 rounded-lg'>Apply</button>
        <button type='reset' className='w-full bg-[#fbed21] text-slate-900 p-1 rounded-lg'>reset</button>

      </div>
    </form>
  )
}

export default AdjustForm
