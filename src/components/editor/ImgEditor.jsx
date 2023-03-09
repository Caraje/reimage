import { useEffect, useState } from 'react'

import 'two-up-element'
import LoadAdvertice from './LoadAdvertice'

const ImgEditor = ({ img, editedImg }) => {
  const [tries, setTries] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  useEffect(() => {
    if (isProcessing) {
      clearInterval(intervalId)
      console.log({ tries })
      const newIntervalId = setInterval(() => {
        setTries((prevTries) => prevTries + 1)
      }, 1500)
      setIntervalId(newIntervalId)
    }
  }, [isProcessing])
  return (
    <>
      {
          isProcessing && <LoadAdvertice />
      }
      <two-up className='flex justify-center items-center'>
        <div className='max-h-[50rem] max-w-[70rem] object-contain'>

          <img src={img} className='h-full w-full  object-contain object-center' />
        </div>
        <div className='max-h-[50rem] max-w-[70rem] object-contain'>

          <img
            src={`${editedImg}?&t=${tries}`}
            onLoad={() => { setIsProcessing(false) }}
            onError={() => { setIsProcessing(true) }}
            className='h-full w-full object-contain object-center'
          />

        </div>
      </two-up>
    </>

  )
}

export default ImgEditor
