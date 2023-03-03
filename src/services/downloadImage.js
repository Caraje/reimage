export async function downloadImage (image, name) {
  await fetch(image)
    .then((response) => {
      return response.blob()
    })
    .then((blob) => {
      const urlBlob = window.URL.createObjectURL(blob)
      const downloadLink = document.createElement('a')
      downloadLink.href = urlBlob
      downloadLink.download = name
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
      window.URL.revokeObjectURL(urlBlob)
    })
}
