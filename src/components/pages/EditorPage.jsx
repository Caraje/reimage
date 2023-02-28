import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import AdjustForm from '../editor/AdjustForm'
import ImgEditor from '../editor/ImgEditor'

function EditorPage () {
  const image = JSON.parse(window.sessionStorage.getItem('image'))
  const originalImg = image.url

  const BASE_URL = 'https://res.cloudinary.com/caraje/image/upload/'
  const IMG_DATA = `v${image.version}/${image.public_id}.${image.format}`

  const [editedImg, setEditedImg] = useState(originalImg)
  const [adjusts, setAdjusts] = useState({
    fill: `c_limit,h_${image.height},w_${image.width}`,
    grayscale: '',
    negative: '',
    format: '',
    quality: '',
    improve: '',
    saturation: '',
    constrast: '',
    brightness: '',
    gamma: '',
    colorize: '',
    blur: '',
    sepia: '',
    oilPaint: '',
    colorBlind: '',
    pixelate: ''
  })
  // console.log({ editedImg })

  useEffect(() => {
    setEditedImg(`${BASE_URL}${Object.values(adjusts).filter(adj => adj).join('/')}/${IMG_DATA}`)
    // console.log({ editedImg })
  }, [adjusts])

  const handleAdjusts = (event) => {
    event.preventDefault()

    const { height, width, grayscale, negative, format, quality, improve, saturation, constrast, brightness, gamma, colorizeLevel, colorizeColor, blur, sepia, oilPaint, colorblind, pixelate } = event.target
    setAdjusts({
      fill: `c_limit,h_${height.value ? height.value : image.height},w_${width.value ? width.value : image.height}`,
      grayscale: grayscale.checked && 'e_grayscale',
      negative: negative.checked && 'e_negate',
      improve: improve.value ? `e_improve:${improve.value}` : '',
      saturation: saturation.value ? `e_saturation:${saturation.value}` : '',
      constrast: constrast.value ? `e_contrast:${constrast.value}` : '',
      brightness: brightness.value ? `e_brightness:${brightness.value}` : '',
      gamma: gamma.value ? `e_gamma:${gamma.value}` : '',
      colorize: colorizeLevel.value ? `co_rgb:${colorizeColor.value.slice(1)},e_colorize:${colorizeLevel.value}` : '',
      blur: blur.value ? `e_blur:${blur.value}` : '',
      sepia: sepia.value ? `e_sepia:${sepia.value}` : '',
      oilPaint: oilPaint.value ? `e_oil_paint:${oilPaint.value}` : '',
      colorBlind: colorblind.value ? `e_simulate_colorblind:${colorblind.value}` : '',
      pixelate: pixelate.value ? `e_pixelate:${pixelate.value}` : '',
      format: format.value ? `f_${format.value}` : '',
      quality: quality.value ? `q_${quality.value}` : ''
    })
  }

  return (
    <>
      <main className='flex flex-col gap-8 align-middle max-w-full justify-center items-center h-screen bg-gradient-to-br from-[#00cc99]  to-[#6600ff] '>
        <section className={`flex justify-center items-center w-[${image.width}px] max-h-[${image.height}px] bg-gray-700/50 rounded-3xl border-2 border-[#fbed21] p-4`}>
          {
            image ? <ImgEditor img={originalImg} editedImg={editedImg} /> : <h2>No hay imagen disponible</h2>
          }
        </section>
        <section className='absolute bottom-8 right-8 bg-slate-700 flex flex-col gap-7 items-center justify-center p-4 rounded-2xl shadow-2xl'>

          <AdjustForm
            adjusts={adjusts}
            handleAdjusts={handleAdjusts}
          />

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
