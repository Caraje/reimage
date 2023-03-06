import React from 'react'

const LoadAdvertice = () => {
  return (
    <div className='z-10 absolute flex gap-4 top-20 bg-amber-500 text-slate-800 py-2 px-4 rounded-lg shadow-lg max-w-[90vw]'>
      <img className='w-10' src='./static_img/icons/iconAdvertice.svg' alt='icon advertice' />
      <div>
        <p className='text-center'>The image is loading,</p>
        <p className='text-center'>please wait.</p>
      </div>
    </div>
  )
}

export default LoadAdvertice
