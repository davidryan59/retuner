const arraysContrastOne = [
  [255, 0, 0],
  [255, 0, 255],
  [0, 0, 255],
  [0, 255, 255],
  [0, 255, 0],
  [255, 255, 0]
]

const arraysContrastHalf = [
  [255, 85, 85],
  [170, 0, 170],
  [85, 85, 255],
  [0, 170, 170],
  [85, 255, 85],
  [170, 170, 0]
]

const arraysContrastZero = [
  [128, 128, 128],
  [128, 128, 128],
  [128, 128, 128],
  [128, 128, 128],
  [128, 128, 128],
  [128, 128, 128]
]

const contrastToColourArray = (contrast) => {
  // Contrast: Number between 0 (greyscale) and 1 (vivid colour)

  let theContrast = Math.max(0, Math.min(1, parseFloat(contrast)))
  let arrayLowContrast = null
  let arrayHighContrast = null

  if (theContrast<0.5) {
    theContrast = theContrast * 2
    arrayLowContrast = arraysContrastZero
    arrayHighContrast = arraysContrastHalf
  } else {
    theContrast = (theContrast-0.5) * 2
    arrayLowContrast = arraysContrastHalf
    arrayHighContrast = arraysContrastOne
  }

  const arrayFinal = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  const multLow = (1 - theContrast)
  const multHigh = theContrast

  for (const i in arrayFinal) {
    const row = arrayFinal[i]
    for (const j in row) {
      row[j] = multLow * arrayLowContrast[i][j] + multHigh * arrayHighContrast[i][j]
    }
  }

  return arrayFinal

}

export default contrastToColourArray
