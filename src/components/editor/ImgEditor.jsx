import 'two-up-element'

const ImgEditor = ({ img, editedImg, setError }) => {
  return (
    <>
      <two-up className='flex justify-center items-center'>
        <div className='max-h-[50rem] max-w-[70rem]'>

          <img src={img} className=' w-full  object-contain object-center' />
        </div>
        <div className='max-h-[50rem] max-w-[70rem]'>
          <img
            src={editedImg}
            onError={() => { setError(true) }}
            className=' w-full object-contain object-center'
          />
        </div>
      </two-up>
    </>

  )
}

export default ImgEditor
