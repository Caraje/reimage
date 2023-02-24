import React from 'react'
import { homeData } from '../../data/homeData'
import CardInfo from './Home/CardInfo'

function HomePage () {
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
          <div className='flex flex-col justify-center items-center border-4 border-[#fbed21] w-full h-full rounded-lg'>

            <img
              src='./static_img/img_Icon.svg'
              alt='Icono de imagenes'
              width={75}
              height={75}
            />
            <h2 className='text-gray-900 font-semibold text-xl flex flex-col text-center'>Drop your <span>Image</span></h2>
          </div>
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
    </>
  )
}

export default HomePage
