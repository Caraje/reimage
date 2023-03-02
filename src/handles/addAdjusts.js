export function addAdjusts (event, setAdjusts, image) {
  const { height, width, grayscale, negative, format, quality, improve, saturation, constrast, brightness, gamma, colorizeLevel, colorizeColor, blur, sepia, oilPaint, colorblind, pixelate, remove } = event.target

  setAdjusts({
    remove: remove.checked && 'e_background_removal',
    grayscale: grayscale.checked && 'e_grayscale',
    negative: negative.checked && 'e_negate',
    fill: `c_limit,h_${height.value ? height.value : image.height},w_${width.value ? width.value : image.height}`,
    improve: improve.value ? `e_improve:${improve.value}` : '',
    saturation: saturation.value ? `e_saturation:${saturation.value}` : '',
    constrast: constrast.value ? `e_contrast:${constrast.value}` : '',
    brightness: brightness.value ? `e_brightness:${brightness.value}` : '',
    gamma: gamma.value ? `e_gamma:${gamma.value}` : '',
    colorize: colorizeLevel.value ? `co_rgb:${colorizeColor.value.slice(1)},e_colorize:${colorizeLevel.value}` : '',
    blur: blur.value ? `e_blur:${blur.value}` : '',
    sepia: sepia.value ? `e_sepia:${sepia.value}` : '',
    oilPaint: oilPaint.value ? `e_oil_paint:${oilPaint.value}` : '',
    colorBlind: colorblind.value ? `e_simulate_colorblind:${colorblind.value}` : '',
    pixelate: pixelate.value ? `e_pixelate:${pixelate.value}` : '',
    format: format.value ? `f_${format.value}` : 'f_png',
    quality: quality.value ? `q_${quality.value}` : ''
  })
}
