import React from 'react'

const FooterWeb = () => {
  return (
    <footer className='bg-[#fbed21] '>
      <div className='flex flex-col md:flex-row items-center justify-between max-w-7xl text-slate-800 font-bold p-4 my-0 mx-auto'>
        <div className='flex flex-col justify-center text-center'>
          <h2>You can see more of my projects at</h2>
          <a className='w-60' href='https://www.carlosajenjo.es' target='_blank' rel='noreferrer'><img src='./static_img/logocarlosajenjo.png' alt='Logo of Cloudinary' /></a>
        </div>
        <div className='flex flex-col justify-center text-center'>
          <h2>Hackathon organized by:</h2>
          <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
            <a className='w-60' href='https://cloudinary.com/' target='_blank' rel='noreferrer'><img src='./static_img/cloudinarylogo.png' alt='Logo of Cloudinary' /></a>
            <a className='w-60' href='https://midu.dev/' target='_blank' rel='noreferrer'><img src='./static_img/midulogo.png' alt='Logo of midudev' /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterWeb
