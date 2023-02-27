import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import ImgEditor from '../editor/ImgEditor'
function EditorPage () {
  const data = JSON.parse(window.sessionStorage.getItem('image'))
  const [image, setImage] = useState(data)
  const [resizing, setResizing] = useState({
    w: image.width,
    h: image.height
  })
  const [improve, setImprove] = useState(0)
  const [editedImg, setEditedImg] = useState(`https://res.cloudinary.com/caraje/image/upload/e_improve/e_improve:0/w_${resizing.w},h_${resizing.h},c_fill/v${image.version}/${image.public_id}.${image.format}`)

  useEffect(() => {
    setEditedImg(`https://res.cloudinary.com/caraje/image/upload/e_improve:${improve}/w_${resizing.w},h_${resizing.h},c_fill/v${image.version}/${image.public_id}.${image.format}`)
  }, [resizing, improve])

  const originalImg = image.url

  // LO RELATIVO AL RESIZE
  const handleResize = (event) => {
    event.preventDefault()
    setResizing({
      w: event.target.h.value,
      h: event.target.w.value,
      improve: event.target.improve.value
    })
  }
  // LO RELATIVO AL IMPROVE
  const handleImprove = (event) => {
    event.preventDefault()
    // console.log(event.target.improve.value)
    setImprove(event.target.improve.value)
  }

  const Download = () => {

  }

  return (
    <>
      <main className='flex flex-col gap-8 align-middle max-w-full justify-center items-center h-screen bg-gradient-to-br from-[#00cc99]  to-[#6600ff] '>
        <section className={`flex justify-center items-center w-[${image.width}px] max-h-[${image.height}px] bg-gray-700/50 rounded-3xl border-2 border-[#fbed21] p-4`}>
          <ImgEditor img={originalImg} editedImg={editedImg} />
        </section>
        <div>

          {/* FORMULARIO PARA EL RESIZE */}
          <form onSubmit={handleResize}>
            <label>
              ANCHO:
              <input
                className='text-gray-900'
                name='w'
                type='number'
                placeholder={resizing.w}
              />
            </label>
            <label>
              ALTO:
              <input
                className='text-gray-900'
                name='h'
                type='number'
                placeholder={resizing.h}
              />
            </label>
            <button className='hidden' />
          </form>
          {/* FORMULARIO PARA EL IMPROVE */}
          <form onSubmit={handleImprove}>
            <label>
              Improve
              <input
                className='text-gray-900'
                name='improve'
                type='number'
                min={0}
                max={100}
                placeholder={improve}
              />
            </label>
            <button className='hidden' />

          </form>
        </div>
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
