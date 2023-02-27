import React from 'react'

const SaturationForm = ({ handleSaturation, saturation }) => {
  return (
    <form
      onSubmit={handleSaturation}
      className='flex flex-col w-full gap-1'
    >
      <h3 className='text-2xl text-[#fbed21] font-extrabold'>Saturation</h3>
      <div className='flex items-end gap-8 '>

        <label className='flex flex-col font-bold text-xs w-1/2'>
          Saturation
          <input
            className='bg-slate-700 border-[1px] border-[#fbed21] rounded-sm h-8 font-bold text-xl p-4'
            name='saturation'
            type='number'
            min={-100}
            max={100}
            placeholder={saturation}
          />
        </label>
        <button className='w-1/2 bg-[#fbed21] text-slate-900 p-1 rounded-lg'>Apply</button>

      </div>
    </form>
  )
}

export default SaturationForm
