import React from 'react'
// import { Link } from 'react-router-dom'
import { homeData } from '../../../data/homeData'

import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'
import CardInfo from '../Home/CardInfo'

function HomePage () {
  const uploadImage = () => {
    const dropzone = new Dropzone('#dropzone', {
      uploadMultiple: false,
      acceptedFiles: '.jpg, .jpeg, .png, .webp',
      maxFiles: 1
    })

    dropzone.on('sending', (file, xhr, formData) => {
      formData.append('file', file)
      formData.append('upload_preset', 'zeu823b9')
      formData.append('timestamp', (Date.now() / 1000))
      formData.append('api_key', '874151438335991')
    })

    dropzone.on('success', (file, response) => {
      const image = {
        url: response.url,
        height: response.height,
        width: response.width,
        format: response.format,
        public_id: response.public_id,
        created_at: response.created_at,
        bytes: response.bytes,
        version: response.version
      }
      window.sessionStorage.setItem('image', JSON.stringify(image))
      window.location.replace('/editor')
    })
    dropzone.on('error', (file, response) => {
      console.log('Ha ido Mal')
      console.log(response)
    })
  }
  return (
    <>
      <main className=' flex flex-col gap-8 align-middle max-w-full justify-center items-center h-screen bg-gradient-to-br from-[#00cc99]  to-[#6600ff] '>
        <img
          className='w-96'
          src='./static_img/logo.webp'
          alt='Logo de Reimage'
          width={548}
          height={126}
        />
        {/* <h1>Edita tus imagenes</h1> */}
        <div className='bg-slate-100 w-96  aspect-video rounded-lg p-2 '>
          <form
            id='dropzone'
            onDragEnter={uploadImage}
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

      {/* SEPARACION DE SECCIONES  */}

      <section className='mt-16 mx-auto flex flex-col flex-wrap gap-48 max-w-7xl mb-10'>
        {
          homeData.map(el => (
            <CardInfo
              key={el.id}
              title={el.title}
              img={el.img}
              text={el.text}
              id={el.id}
            />
          ))
        }

      </section>

      {/* SEPARACION DE SECCIONES  */}

      <footer className='bg-[#fbed21] h-12 flex flex-col items-center justify-center'>
        <p className='text-black text-center'>App creada por <a href='https://www.carlosajenjo.es/' target='_blank' rel='noreferrer'>Carlos Ajenjo </a></p>
      </footer>

      {/* <Link
        className='
          absolute top-5 left-5 bg-[#fbed21] w-10 h-10 pt-1 rounded-3xl text-center text-black text-2xl font-bold transition-all
          hover:bg-[#fff27b] hover:scale-125
          '
        to='/editor'
      >
        X
      </Link> */}
    </>
  )
}

export default HomePage
