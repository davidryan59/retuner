const drawInstrumentKeys = (state) => {

  const context = state.graphics.context
  const loops = state.control.loopCount
  // const canvasHeight = state.graphics.boundDown
  // const coordFactor = 6.1
  // const radiusFactor = 4.6
  const radiusFactor = 1
  const textLengthFactor = 2.5
  const indexFactor = 12
  const verticalShift = 7
  const baseFreq = state.freqs.currentFreq

  const canvasCentreX = state.graphics.centreX
  const canvasCentreY = state.graphics.centreY
  const canvasZoom = state.graphics.zoom

  const viewObjectCentreX = state.graphics.viewObjects.centreX
  const viewObjectCentreY = state.graphics.viewObjects.centreY
  const viewObjectZoom = state.graphics.viewObjects.overallZoom
  // Can also use 'rgba(100, 200, 255, 0.5)'
  // for alpha transparency!
  for (const keyIndex of state.keyOrderArray) {
    const key = state.keys[keyIndex]
    if (key.physicsSwitchedOn) {
      // const x = key.location.x * coordFactor
      // const y = canvasHeight - key.location.y * coordFactor
      // const r = key.location.r * key.location.extraR * radiusFactor

      const xRel = ( key.location.x - viewObjectCentreX ) / viewObjectZoom
      const yRel = ( key.location.y - viewObjectCentreY ) / viewObjectZoom
      const rRel = key.location.r / viewObjectZoom

      const x = canvasCentreX + 0.1 * canvasZoom * xRel
      const y = canvasCentreY - 0.1 * canvasZoom * yRel
      const r = canvasZoom * rRel * key.location.extraR * radiusFactor

      // context.fillStyle = key.getBgColour(state, key)
      context.fillStyle = key.bgColour(state, key)
      context.strokeStyle = 'rgba(20, 20, 20, 0.6)'
      context.lineWidth = (key.transposes) ? 4 * (2 / key.transposes.factor) : 3
      context.beginPath()
      context.arc(x, y, r, 0, 2*Math.PI);
      context.stroke();
      context.fill()
      // Draw button labels
      context.fillStyle = 'rgb(0, 0, 0)'
      const buttonTextArray = [key.symbol || key.keyboardCode]
      if (key.functionLabel) {
        buttonTextArray.push(key.functionLabel)
      }
      if (key.transposes) {
        const freq = baseFreq * key.transposes.factor
        const freqText = Math.round(freq*10)/10 + "Hz"
        buttonTextArray.push(freqText)
        buttonTextArray.push(key.transposes.text)
      }
      const maxI = buttonTextArray.length
      for (const i in buttonTextArray) {
        const theText = buttonTextArray[i]
        const textLength = theText.length
        context.fillText(
          theText,
          x - textLengthFactor * textLength,
          y + verticalShift + indexFactor * (i - 0.5*maxI)
        )
      }

    }
  }
}

export default drawInstrumentKeys
