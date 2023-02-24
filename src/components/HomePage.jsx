import React from 'react'

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
        <div className='bg-slate-300 w-96  aspect-video rounded-lg p-2 '>
          <div className='flex flex-col justify-center items-center border-4 border-[#fbed21] w-full h-full rounded-lg'>

            <img
              className='text-white fill-current'
              src='./static_img/img_Icon.svg'
              alt='Icono de imagenes'
              width={50}
              height={50}
            />
            <h2 className='text-gray-900 font-semibold text-xl flex flex-col text-center'>Drop your <span>Image</span></h2>
          </div>
        </div>
      </main>

      {/* SEPARACION DE SECCIONES  */}

      <section className='mt-16 mx-auto flex flex-col flex-wrap gap-48 max-w-7xl mb-10'>
        <article className='flex  flex-col md:flex-row-reverse  justify-center items-center gap-10  p-10 md:p-4'>
          <header className='md:w-1/2 h-full p-0 md:p-8 '>
            <h2 className='text-[#fbed21] text-5xl font-bold mb-8'>Mejore sus Imagenes</h2>
            <p className='text-xl'>Abre tu imagen y prueba los diferentes ajustes que te ofrecemos para mejorar los colores, el contraste o el brillo de tus fotos</p>
          </header>
          <img className='md:w-1/2 rounded-2xl border border-[#fbed21] ' src='./static_img/colors_img.webp' alt='imagen que muestra la compracion conarreglo de colores' width={960} height={540} />
        </article>

        <article className='flex  flex-col md:flex-row  justify-center items-center gap-10  p-10 md:p-4'>
          <header className='md:w-1/2 h-full p-0 md:p-8 '>
            <h2 className='text-[#fbed21] text-5xl font-bold mb-8'>Ajuste el tamaño</h2>
            <p className='text-xl'>Pruebe a usar las opciones para escalar o ajustar sus imagenes, para que siempre tengan el tamaño y las proporciones correctas.</p>
          </header>
          <img className='md:w-1/2 rounded-2xl border border-[#fbed21] ' src='./static_img/scale_img.webp' alt='imagen que muestra una imagen reescalada en compracion con otra' width={960} height={540} />
        </article>

        <article className='flex  flex-col md:flex-row-reverse justify-center items-center  gap-10 p-10 md:p-4'>
          <header className='md:w-1/2 h-full p-0 md:p-8 '>
            <h2 className='text-[#fbed21] text-5xl font-bold mb-8'>Elimine los fondos</h2>
            <p className='text-xl'>Seleccione una foto para poder eliminar el fondo por completo de manera sencilla y rapida, para poder usarla en sus proyectos.</p>
          </header>
          <img className='md:w-1/2 rounded-2xl border border-[#fbed21] ' src='./static_img/bg.webp' alt='imagen que muestra una imagen a la que le han eliminado el fondo' width={960} height={540} />
        </article>
      </section>

      {/* SEPARACION DE SECCIONES  */}

      <footer className='bg-[#fbed21] h-12 flex flex-col items-center justify-center'>
        <p className='text-black text-center'>App creada por <a href='https://www.carlosajenjo.es/' target='_blank' rel='noreferrer'>Carlos Ajenjo </a></p>
      </footer>
    </>
  )
}

export default HomePage
