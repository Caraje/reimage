import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import ImproveForm from '../editor/forms/ImproveForm'
import ResizeForm from '../editor/forms/ResizeForm'
import SaturationForm from '../editor/forms/SaturationForm'
import ImgEditor from '../editor/ImgEditor'
function EditorPage () {
  const data = JSON.parse(window.sessionStorage.getItem('image'))
  const [image, setImage] = useState(data)
  const [resizing, setResizing] = useState({
    w: image.width,
    h: image.height
  })
  const [improve, setImprove] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [editedImg, setEditedImg] = useState(`https://res.cloudinary.com/caraje/image/upload/e_saturation:${saturation}/e_improve/e_improve:0/w_${resizing.w},h_${resizing.h},c_fill/v${image.version}/${image.public_id}.${image.format}`)

  useEffect(() => {
    setEditedImg(`https://res.cloudinary.com/caraje/image/upload/e_saturation:${saturation}/e_improve:${improve}/w_${resizing.w},h_${resizing.h},c_fill/v${image.version}/${image.public_id}.${image.format}`)
  }, [resizing, improve, saturation])

  const originalImg = image.url

  // LO RELATIVO AL RESIZE
  const handleResize = (event) => {
    event.preventDefault()
    setResizing({
      w: event.target.h.value,
      h: event.target.w.value
    })
  }
  // LO RELATIVO AL IMPROVE
  const handleImprove = (event) => {
    event.preventDefault()
    setImprove(event.target.improve.value)
  }

  // Lo RELATIVO A LA SATURACION
  // https://res.cloudinary.com/demo/image/upload/e_saturation:60/vegetable_soup.jpg
  const handleSaturation = (event) => {
    event.preventDefault()
    setSaturation(event.target.saturation.value)
  }

  return (
    <>
      <main className='flex flex-col gap-8 align-middle max-w-full justify-center items-center h-screen bg-gradient-to-br from-[#00cc99]  to-[#6600ff] '>
        <section className={`flex justify-center items-center w-[${image.width}px] max-h-[${image.height}px] bg-gray-700/50 rounded-3xl border-2 border-[#fbed21] p-4`}>
          {
            data ? <ImgEditor img={originalImg} editedImg={editedImg} /> : <h2>No hay imagen disponible</h2>
          }
        </section>
        <section className='absolute bottom-8 right-8 bg-slate-700 flex flex-col gap-7 items-center justify-center p-4 rounded-2xl shadow-2xl'>

          {/* FORMULARIO PARA EL RESIZE */}
          <ResizeForm handleResize={handleResize} resizing={resizing} />
          {/* FORMULARIO PARA EL IMPROVE */}
          <ImproveForm handleImprove={handleImprove} improve={improve} />
          {/* FORMULARIO PARA EL IMPROVE */}
          <SaturationForm handleSaturation={handleSaturation} saturation={saturation} />

        </section>
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
