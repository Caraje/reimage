import React from 'react'
import ErrorAdvertice from './ErrorAdvertice'
import ImgEditor from './ImgEditor'

const EditorCanvas = ({ image, originalImg, editedImg, setError, imgData }) => {
  const [, height, width] = imgData.fill.split(',')
  const widthImg = Number(width.split('w_')[1])
  const heightImg = Number(height.split('h_')[1])

  return (
    <section className={`flex justify-center items-center w-[${image.width}px] max-h-[${image.height}px] bg-gray-700/50 rounded-3xl border-2 border-[#fbed21] overflow-hidden`}>
      {
        (widthImg > 4000 || heightImg > 4000) && <ErrorAdvertice />
      }
      {
        image ? <ImgEditor img={originalImg} editedImg={editedImg} setError={setError} /> : <h2>No hay imagen disponible</h2>
      }
    </section>
  )
}

export default EditorCanvas
