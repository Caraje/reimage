import React from 'react'
import ImgEditor from './ImgEditor'

const EditorCanvas = ({ image, originalImg, editedImg, setError }) => {
  return (
    <section className={`flex justify-center items-center w-[${image.width}px] max-h-[${image.height}px] bg-gray-700/50 rounded-3xl border-2 border-[#fbed21] overflow-hidden`}>
      {
      image ? <ImgEditor img={originalImg} editedImg={editedImg} setError={setError} /> : <h2>No hay imagen disponible</h2>
    }
    </section>
  )
}

export default EditorCanvas
