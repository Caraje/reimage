import React from 'react'

const ErrorAdvertice = () => {
  return (
    <div className='absolute flex gap-4 top-12 bg-amber-500 text-slate-800 py-2 px-4 rounded-lg shadow-lg'>
      <img className='w-10' src='./static_img/icons/iconAdvertice.svg' alt='icon advertice' />
      <div>

        <p className='text-center'>An error occurred while using Remove Background</p>
        <p className='text-center'>Please refresh the page and try again.</p>
      </div>
    </div>
  )
}

export default ErrorAdvertice
