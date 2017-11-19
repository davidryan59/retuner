const drawInstrumentKeys = (state) => {

  const context = state.graphics.context
  const loops = state.control.loopCount
  const canvasHeight = state.graphics.boundDown
  const coordFactor = 6.1
  const radiusFactor = 4.6
  const textLengthFactor = 2.5
  const indexFactor = 12
  const verticalShift = 7
  const baseFreq = state.freqs.currentFreq
  // Can also use 'rgba(100, 200, 255, 0.5)'
  // for alpha transparency!
  for (const keyIndex of state.keyOrderArray) {
    const key = state.keys[keyIndex]
    if (key.physicsSwitchedOn) {
      const x = key.location.x * coordFactor
      const y = canvasHeight - key.location.y * coordFactor
      const r = key.location.r * radiusFactor

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
        buttonTextArray.unshift(key.transposes.text)
        buttonTextArray.push(freqText)
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
