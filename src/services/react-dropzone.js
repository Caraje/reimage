
export async function dropzone (files, ...props) {
  const APIKEY_CLOUDINARY = import.meta.env.VITE_APIKEY_CLOUDINARY
  const NAME_CLOUD_CLOUDINARY = import.meta.env.VITE_NAME_CLOUD_CLOUDINARY
  const fileType = files[0].type.split('/')[0]

  const [, setisValidFile] = props

  const formData = new FormData()
  formData.append('file', files[0])
  formData.append('upload_preset', 'Reimage')
  formData.append('timestamp', (Date.now() / 1000))
  formData.append('api_key', APIKEY_CLOUDINARY)

  if (fileType !== 'image') {
    console.log('The selected file type is not an image, please select an image and try again')
    setisValidFile(false)
    return
  }

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${NAME_CLOUD_CLOUDINARY}/image/upload`, {
      method: 'POST',
      body: formData
    })
    const result = await response.json()
    const image = {
      url: result.url,
      height: result.height,
      width: result.width,
      format: result.format,
      public_id: result.public_id,
      created_at: result.created_at,
      bytes: result.bytes,
      version: result.version
    }
    setisValidFile(true)

    window.sessionStorage.setItem('image', JSON.stringify(image))
    window.location.replace('/editor')
  } catch (error) {
    console.log(error)
  }
}
