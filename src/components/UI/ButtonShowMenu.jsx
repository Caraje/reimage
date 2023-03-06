import React from 'react'

const ButtonShowMenu = ({ setIsVisible }) => {
  return (
    <button
      onClick={() => { setIsVisible(true) }}
      className='
      absolute bottom-5 right-5 bg-[#fbed21] w-20 p-[.3rem] rounded-3xl
      hover:scale-110 hover:brightness-150 hover:shadow-2xl ease-in-out duration-300
      '
    >
      <img className='w-full p-1' src='./static_img/icons/iconMenu.svg' alt='Icon for back' />
    </button>
  )
}

export default ButtonShowMenu
