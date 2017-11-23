const updateCanvasCoords = (state) => {

  // Currently only the instrument keys
  // If other elements to calculate, split into multiple methods

  const canvasCentreX = state.graphics.centreX
  const canvasCentreY = state.graphics.centreY
  const canvasZoom = state.graphics.zoom

  const viewObjectCentreX = state.graphics.viewObjects.centreX
  const viewObjectCentreY = state.graphics.viewObjects.centreY
  const viewObjectZoom = state.graphics.viewObjects.zoom

  for (const keyIndex of state.keyOrderArray) {

    const key = state.keys[keyIndex]
    const canvasCoords = key.canvas

    const xRel = ( key.location.x - viewObjectCentreX ) / viewObjectZoom
    const yRel = ( key.location.y - viewObjectCentreY ) / viewObjectZoom
    const rRel = key.location.r / viewObjectZoom

    const x = canvasCentreX + canvasZoom * xRel
    const y = canvasCentreY - canvasZoom * yRel
    const r = canvasZoom * rRel * key.location.extraR

    canvasCoords.x = x
    canvasCoords.y = y
    canvasCoords.r = r

  }

}

export default updateCanvasCoords
