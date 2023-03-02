import React from 'react'
import { Link } from 'react-router-dom'

const ButtonBack = () => {
  return (
    <Link
      className='
      absolute top-5 left-5 bg-[#fbed21] w-10 p-[.3rem] rounded-3xl
      hover:scale-150 hover:brightness-150 hover:shadow-2xl ease-in-out duration-300
      '
      to='/'
    >
      <img className='w-full p-1' src='./static_img/icons/iconBack.svg' alt='Icon for back' />
    </Link>
  )
}

export default ButtonBack
