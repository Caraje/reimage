import React from 'react'

const ErrorAdvertice = () => {
  return (
    <div className='z-10 absolute flex gap-4 bottom-12 bg-amber-500 text-slate-800 py-2 px-4 rounded-lg shadow-lg'>
      <img className='w-10' src='./static_img/icons/iconAdvertice.svg' alt='icon advertice' />
      <div>
        <p className='text-center'>The image cannot be larger than 4000 x 4000 pixels,</p>
        <p className='text-center'>reduce the size in this app and press apply to see your image</p>
      </div>
    </div>
  )
}

export default ErrorAdvertice
