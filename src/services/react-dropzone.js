
export async function dropzone (files) {
  const formData = new FormData()
  formData.append('file', files[0])
  formData.append('upload_preset', 'Reimage')
  formData.append('timestamp', (Date.now() / 1000))
  formData.append('api_key', '874151438335991')

  try {
    const response = await fetch('https://api.cloudinary.com/v1_1/caraje/image/upload', {
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
    window.sessionStorage.setItem('image', JSON.stringify(image))
    window.location.replace('/editor')
  } catch (error) {
    console.log('Ha ido Mal')
    console.log(error)
  }
}
