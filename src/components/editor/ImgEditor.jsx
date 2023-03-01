import 'two-up-element'

const ImgEditor = ({ img, editedImg }) => {
  return (
    <>
      <two-up className='flex justify-center items-center'>
        <div className='max-h-[50rem] max-w-[70rem]'>

          <img src={img} className='h-full w-full  object-contain object-center' />
        </div>
        <img src={editedImg} className='max-h-[50rem] max-w-[70rem] object-fill object-center' />
        <div className='max-h-[50rem] max-w-[70rem]'>
          <img
            src={editedImg}
            className='h-full w-full object-contain object-center'
          />
        </div>
      </two-up>
    </>

  )
}

export default ImgEditor
