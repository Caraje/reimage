import React from 'react'
import { downloadImage } from '../../services/downloadImage'

const ButtonsForm = ({ image, name, setIsVisible }) => {
  return (
    <div className=' flex flex-col gap-3 w-full mt-2'>
      <div className='flex gap-3 w-full mt-2'>

        <button
          className='
        w-full bg-[#fbed21] text-slate-900 p-1 rounded-lg font-bold
        hover:scale-105 hover:brightness-200 hover:shadow-2xl ease-in-out duration-300
            '
        >
          Apply
        </button>
        <button
          type='reset'
          className='
        w-full bg-[#fbed21] text-slate-900 p-1 rounded-lg font-bold
              hover:scale-105 hover:brightness-200 hover:shadow-2xl ease-in-out duration-300
              '
        >
          reset
        </button>
      </div>
      <div className='flex gap-3 w-full mt-2'>
        <button
          className='
          w-5/6 bg-[#fbed21] text-slate-900 p-1 rounded-lg font-bold
          hover:scale-105 hover:brightness-200 hover:shadow-2xl ease-in-out duration-300
              '
          onClick={(e) => { downloadImage(image, name) }}
          href={image}
        >Descargar
        </button>
        <button
          className='
          w-1/6 bg-[#fbed21] text-slate-900 p-1 rounded-lg font-bold
          hover:scale-105 hover:brightness-200 hover:shadow-2xl ease-in-out duration-300
              '
          onClick={() => { setIsVisible(false) }}
          href={image}
        >X
        </button>
      </div>

    </div>
  )
}

export default ButtonsForm
