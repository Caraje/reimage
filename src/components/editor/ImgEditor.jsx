import 'two-up-element'

const ImgEditor = ({ img, editedImg, setError }) => {
  return (
    <>
      <two-up className='flex justify-center items-center'>
        <div>

          <img src={img} className=' w-[90vw]  object-contain object-center' />
        </div>
        <div>
          <img
            src={editedImg}
            onError={() => { setError(true) }}
            className=' w-[90vw] object-contain object-center'
          />
        </div>
      </two-up>
    </>

  )
}

export default ImgEditor
