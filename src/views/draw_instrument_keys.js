const lineSpacing = 2      // px between button text rows

const drawInstrumentKeys = (state) => {

  const context = state.context.graphics
  const stateKey = state.key

  for (const keyIndex of stateKey.indexOrderArray) {
    const key = stateKey.array[keyIndex]

    const canvasCoords = key.coords.canvas
    const x = canvasCoords.x
    const y = canvasCoords.y
    const r = canvasCoords.r

    // Setup fill
    context.fillStyle = key.graphics.getFillStyle(state, key)

    // Setup border
    context.lineWidth = key.graphics.getLineWidth(state, key)
    context.strokeStyle = key.graphics.getStrokeStyle(state, key)
    // Options for dashed border below:
    context.lineCap = "round"
    context.setLineDash(key.graphics.getLineDash(state, key))
    // context.setLineDash([])  // Solid line!
    // Dashed line, 1px on, 12px off
    // (lineCap of "round" increases coverage of "on" part)
    // context.setLineDash([1, 12])

    // Do drawing
    context.beginPath()
    context.arc(x, y, r, 0, 2*Math.PI);
    context.stroke();
    context.fill()
    // Draw button labels
    // Centering in x direction is automatic
    context.textAlign = "center"
    context.textBaseline = "middle"
    // Centering in y direction is manual, see yText below
    context.font = key.graphics.getFontStyle(state, key)
    context.fillStyle = key.graphics.getTextColour(state, key)
    const buttonTextArray = key.graphics.getLabelArray(state, key)
    const fontHeight = key.graphics.getFontHeight(state, key)
    const lineHeight = fontHeight + lineSpacing
    const maxI = buttonTextArray.length - 1
    for (const i in buttonTextArray) {
      const theText = buttonTextArray[i]
      // Button text would be vertically centered for a SINGLE line
      // Here we centre it for MULTIPLE lines
      const yText = y + lineHeight * (i - 0.5 * maxI)
      context.fillText(theText, x, yText)
    }
  }
}

export default drawInstrumentKeys
