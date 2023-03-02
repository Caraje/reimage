import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'

export function dropzone () {
  const dropzone = new Dropzone('#dropzone', {
    uploadMultiple: false,
    acceptedFiles: '.jpg, .jpeg, .png, .webp',
    maxFiles: 1
  })

  dropzone.on('sending', (file, xhr, formData) => {
    formData.append('file', file)
    formData.append('upload_preset', 'Reimage')
    formData.append('timestamp', (Date.now() / 1000))
    formData.append('api_key', '874151438335991')
  })

  dropzone.on('success', (file, response) => {
    const image = {
      url: response.url,
      height: response.height,
      width: response.width,
      format: response.format,
      public_id: response.public_id,
      created_at: response.created_at,
      bytes: response.bytes,
      version: response.version
    }
    window.sessionStorage.setItem('image', JSON.stringify(image))
    window.location.replace('/editor')
  })
  dropzone.on('error', (file, response) => {
    console.log('Ha ido Mal')
    console.log(response)
  })
}
