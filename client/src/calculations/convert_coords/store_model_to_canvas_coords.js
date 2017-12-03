const storeModelToCanvasCoords = (state) => {

  // Currently only the instrument keys
  // If other elements to calculate, split into multiple methods

  const stateKey = state.key
  const stateGraphics = state.graphics
  const canvasStats = stateGraphics.canvasInfo
  const modelStats = stateGraphics.modelInfo

  const canvasCentreX = canvasStats.centreX
  const canvasCentreY = canvasStats.centreY
  const canvasZoom = canvasStats.zoom

  const viewObjectCentreX = modelStats.centreX
  const viewObjectCentreY = modelStats.centreY
  const viewObjectZoom = modelStats.zoom

  const spacingR = 0.5 * (1 + state.slider.keySpacing.getFraction())

  for (const keyIndex of stateKey.indexOrderArray) {

    const key = stateKey.array[keyIndex]
    const canvasCoords = key.coords.canvas
    const keyLocation = key.coords.model.current

    const xRel = ( keyLocation.x - viewObjectCentreX ) / viewObjectZoom
    const yRel = ( keyLocation.y - viewObjectCentreY ) / viewObjectZoom
    const rRel = keyLocation.r / viewObjectZoom

    const x = canvasCentreX + canvasZoom * xRel
    const y = canvasCentreY - canvasZoom * yRel       // y inverted here
    const r = canvasZoom * rRel * keyLocation.extraR * spacingR

    canvasCoords.x = x
    canvasCoords.y = y
    canvasCoords.r = r

  }

}

export default storeModelToCanvasCoords
