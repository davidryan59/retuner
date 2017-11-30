const drawInstrumentKeys = (state) => {

  const context = state.graphics.context

  const textLengthFactor = 2.5
  const indexFactor = 12
  const verticalShift = 7
  const baseFreq = state.freqs.currentFreq

  for (const keyIndex of state.keyOrderArray) {
    const key = state.keys[keyIndex]
    if (key.physicsSwitchedOn) {

      const canvasCoords = key.canvas
      const x = canvasCoords.x
      const y = canvasCoords.y
      const r = canvasCoords.r

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
        const freq = key.nextFreq(state, key)
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
