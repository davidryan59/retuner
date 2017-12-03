const convertCanvasToModelCoords = (state, canvasX, canvasY) => {

  const stateGraphics = state.graphics
  const canvasStats = stateGraphics.canvasInfo
  const modelStats = stateGraphics.modelInfo

  const canvasCentreX = canvasStats.centreX
  const canvasCentreY = canvasStats.centreY
  const canvasZoom = canvasStats.zoom

  const viewObjectCentreX = modelStats.centreX
  const viewObjectCentreY = modelStats.centreY
  const viewObjectZoom = modelStats.zoom

  const xRel = ( canvasX - canvasCentreX ) / canvasZoom
  const yRel = ( canvasY - canvasCentreY ) / canvasZoom

  const modelX = viewObjectCentreX + viewObjectZoom * xRel
  const modelY = viewObjectCentreY - viewObjectZoom * yRel  // y inverted here

  return {
    modelX: modelX,
    modelY: modelY
  }

}

export default convertCanvasToModelCoords
