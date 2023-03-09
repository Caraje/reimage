import React, { useState, useEffect } from 'react'
import { addAdjusts } from '../../handles/addAdjusts'
// import DisabledAdvertice from '../editor/DisabledAdvertice'
import EditorCanvas from '../editor/EditorCanvas'
import ErrorAdvertice from '../editor/ErrorAdvertice'
import FormAdjusts from '../editor/FormAdjusts'
import ButtonBack from '../UI/ButtonBack'
import ButtonShowMenu from '../UI/ButtonShowMenu'
import FooterWeb from '../UI/FooterWeb'

function EditorPage () {
  // const disabled = false
  const NAME_CLOUD_CLOUDINARY = import.meta.env.VITE_NAME_CLOUD_CLOUDINARY

  const image = JSON.parse(window.sessionStorage.getItem('image'))
  !image && window.location.replace('/')
  const originalImg = image.url
  const [editedImg, setEditedImg] = useState(originalImg)
  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState(false)
  const [adjusts, setAdjusts] = useState({
    fill: `c_limit,h_${image.height},w_${image.width}`,
    format: 'f_png'
  })

  const BASE_URL = `https://res.cloudinary.com/${NAME_CLOUD_CLOUDINARY}/image/upload/`
  const IMG_DATA = `v${image.version}/${image.public_id}`

  useEffect(() => {
    setEditedImg(`${BASE_URL}${Object.values(adjusts).filter(adj => adj).join('/')}/${IMG_DATA}.${image.format}`)
  }, [adjusts])

  const handleAdjusts = (event) => {
    event.preventDefault()
    addAdjusts(event, setAdjusts, image)
  }

  return (
    <>
      <main className='flex flex-col gap-8 align-middle max-w-full justify-center items-center h-screen bg-gradient-to-br from-[#00cc98]  to-[#6600ff] p-4 '>

        <EditorCanvas
          image={image}
          imgData={adjusts}
          originalImg={originalImg}
          editedImg={editedImg}
          setError={setError}
        />

        {
  isVisible
    ? (
      <FormAdjusts
        adjusts={adjusts}
        handleAdjusts={handleAdjusts}
        image={editedImg}
        name={image.public_id}
        size={image}
        setIsVisible={setIsVisible}
      />
      )
    : (
      <ButtonShowMenu setIsVisible={setIsVisible} />
      )
}

        {
          error && <ErrorAdvertice />
        }
        {/* {
          disabled && <DisabledAdvertice />
        } */}
      </main>

      <FooterWeb />
      <ButtonBack />
    </>
  )
}

export default EditorPage
