import React from 'react'

const DisabledAdvertice = () => {
  return (
    <div className='absolute flex gap-4 top-12 bg-amber-500 text-slate-800 py-2 px-4 rounded-lg shadow-lg'>
      <img className='w-10' src='./static_img/icons/iconAdvertice.svg' alt='icon advertice' />
      <div>
        <p className='text-center'>Remote background is temporarily disabled</p>
        <p className='text-center'>will be activated for the hackathon.
        </p>
      </div>
    </div>
  )
}

export default DisabledAdvertice
