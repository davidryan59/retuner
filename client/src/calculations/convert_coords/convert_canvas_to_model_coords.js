const convertCanvasToModelCoords = (state, canvasX, canvasY) => {

  const canvasCentreX = state.graphics.centreX
  const canvasCentreY = state.graphics.centreY
  const canvasZoom = state.graphics.zoom

  const viewObjectCentreX = state.graphics.viewObjects.centreX
  const viewObjectCentreY = state.graphics.viewObjects.centreY
  const viewObjectZoom = state.graphics.viewObjects.zoom

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
