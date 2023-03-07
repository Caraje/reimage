import React, { useState } from 'react'

import Dropzone from 'react-dropzone'
import { dropzone } from '../../services/react-dropzone'
import ErrorFileAdvertice from './ErrorFileAdvertice'

const FormImage = () => {
  const [isValidFile, setisValidFile] = useState(true)
  return (
    <main className=' flex flex-col gap-8 align-middle max-w-full justify-center items-center h-screen bg-gradient-to-br from-[#00cc99]  to-[#6600ff] p-4 '>
      <img
        className='w-96'
        src='./static_img/logo.webp'
        alt='Logo de Reimage'
        width={548}
        height={126}
      />
      <div className='bg-slate-100 w-[90vw] md:w-96  aspect-video rounded-lg p-2 '>
        <div className='flex flex-col justify-center items-center border-4 border-[#fbed21] w-full h-full rounded-lg'>

          <Dropzone onDrop={(files) => { dropzone(files, isValidFile, setisValidFile) }} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className='flex flex-col justify-center items-center gap-4'>
                    <img
                      src='./static_img/img_Icon.svg'
                      alt='Icono de imagenes'
                      width={75}
                      height={75}
                    />
                    <h2 className='text-gray-900 font-semibold text-xl flex flex-col text-center'>Select Yout image or<span>Drop your Image</span></h2>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

      </div>

      {!isValidFile && <ErrorFileAdvertice />}
    </main>
  )
}

export default FormImage
