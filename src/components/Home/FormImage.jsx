import React from 'react'
import { dropzone } from '../../services/dropzone'

const FormImage = () => {
  return (
    <main className=' flex flex-col gap-8 align-middle max-w-full justify-center items-center h-screen bg-gradient-to-br from-[#00cc99]  to-[#6600ff] '>
      <img
        className='w-96'
        src='./static_img/logo.webp'
        alt='Logo de Reimage'
        width={548}
        height={126}
      />
      <div className='bg-slate-100 w-96  aspect-video rounded-lg p-2 '>
        <form
          id='dropzone'
          onDragEnter={dropzone}
          action='https://api.cloudinary.com/v1_1/caraje/image/upload'
          className='flex flex-col justify-center items-center border-4 border-[#fbed21] w-full h-full rounded-lg'
        >
          <input className='hidden' type='file' visbility='hidden' id='myFileInput' />
          <button disabled>
            <img
              src='./static_img/img_Icon.svg'
              alt='Icono de imagenes'
              width={75}
              height={75}
            />
            <h2 className='text-gray-900 font-semibold text-xl flex flex-col text-center'>Drop your <span>Image</span></h2>
          </button>
        </form>
      </div>
    </main>
  )
}

export default FormImage
