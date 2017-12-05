const drawInstrumentKeys = (state) => {

  const context = state.context.graphics
  const stateKey = state.key

  const textLengthFactor = 2.5
  const indexFactor = 12
  const verticalShift = 7
  // const baseFreq = state.freqs.current.freq

  for (const keyIndex of stateKey.indexOrderArray) {
    const key = stateKey.array[keyIndex]
    if (key.physicsSwitchedOn) {

      const canvasCoords = key.coords.canvas
      const x = canvasCoords.x
      const y = canvasCoords.y
      const r = canvasCoords.r

      context.fillStyle = key.fillStyle(state, key)
      context.strokeStyle = key.strokeStyle(state, key)
      context.lineWidth = key.lineWidth(state, key)
      context.beginPath()
      context.arc(x, y, r, 0, 2*Math.PI);
      context.stroke();
      context.fill()
      // Draw button labels
      context.font = key.font(state, key)
      context.fillStyle = key.textColour(state, key)
      const buttonTextArray = [key.symbol || key.keyboardCode]
      if (key.functionLabel) {
        buttonTextArray.push(key.functionLabel)
      }
      if (key.transposes) {
        const freq = key.nextFreqAbsHz(state, key)
        const freqText = freq.toFixed(2) + "Hz"
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
