import React from 'react'

const CardInfo = ({ title, img, text, id }) => {
  return (
    <article className={`flex  flex-col ${id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center items-center gap-10  p-10 md:p-4`}>
      <header className='md:w-1/2 h-full p-0 md:p-8 '>
        <h2 className='text-[#fbed21] text-5xl font-bold mb-8'>{title}</h2>
        <p className='text-xl'>{text}</p>
      </header>
      <img className='md:w-1/2 rounded-2xl border border-[#fbed21] ' src={img} alt='imagen que muestra la compracion conarreglo de colores' width={960} height={540} />
    </article>
  )
}

export default CardInfo
