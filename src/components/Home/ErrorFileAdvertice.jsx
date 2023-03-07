import React from 'react'

const ErrorFileAdvertice = () => {
  return (
    <div className='z-10 absolute flex gap-4 bottom-44 bg-amber-500 text-slate-800 py-2 px-4 rounded-lg shadow-lg'>
      <img className='w-10' src='./static_img/icons/iconAdvertice.svg' alt='icon advertice' />
      <div>
        <p className='text-center'>The selected file type is not an image,</p>
        <p className='text-center'>please select an image and try again</p>
      </div>
    </div>
  )
}

export default ErrorFileAdvertice
