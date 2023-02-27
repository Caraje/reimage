import React from 'react'

import { Link } from 'react-router-dom'
function EditorPage () {
  const imagen = window.sessionStorage.getItem('image')

  return (
    <>
      <main className='flex flex-col gap-8 align-middle max-w-full justify-center items-center h-screen bg-gradient-to-br from-[#00cc99]  to-[#6600ff] '>
        <img src={imagen} />
        <h1>HOLA MUNDO</h1>
      </main>
      <footer className='bg-[#fbed21] h-12 flex flex-col items-center justify-center'>
        <p className='text-black text-center'>App creada por <a href='https://www.carlosajenjo.es/' target='_blank' rel='noreferrer'>Carlos Ajenjo </a></p>
      </footer>
      <Link
        className='
          absolute top-5 left-5 bg-[#fbed21] w-10 h-10 pt-1 rounded-3xl text-center text-black text-2xl font-bold transition-all
          hover:bg-[#fff27b] hover:scale-125
          '
        to='/'
      >
        X
      </Link>
    </>
  )
}

export default EditorPage
