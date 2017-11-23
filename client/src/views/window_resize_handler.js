const windowResizeHandler = (state, event) => {
  // 'event' is not used, since window info can be
  // retrieved directly from 'window' and this works
  // even when an event is not supplied, e.g. on initialisation

  const currentCanvasWidth = state.graphics.boundRight   // boundLeft is always zero
  const newWindowWidth = window.innerWidth
  const proposedCanvasWidth = newWindowWidth - 100

  // Don't allow a canvas less than 100 pixels wide
  if (proposedCanvasWidth > 100) {
    const canvasAmendWidthRatio = proposedCanvasWidth / currentCanvasWidth
    // Only resize if window has changed size enough
    if (canvasAmendWidthRatio < 0.97 || 1.10 < canvasAmendWidthRatio) {
      const proposedCanvasHeight = Math.round(0.375 * proposedCanvasWidth)
      const canvasElt = state.pageElts.canvas
      canvasElt.width = proposedCanvasWidth
      canvasElt.height = proposedCanvasHeight

      // For canvas, (0, 0) is in top left corner
      state.graphics.boundUp = 0
      state.graphics.boundDown = proposedCanvasHeight
      state.graphics.boundLeft = 0
      state.graphics.boundRight = proposedCanvasWidth

      state.graphics.centreX = 0.5 * (state.graphics.boundUp + state.graphics.boundDown)
      state.graphics.centreY = 0.5 * (state.graphics.boundLeft + state.graphics.boundRight)

      state.graphics.sizeX = state.graphics.boundDown - state.graphics.boundUp
      state.graphics.sizeY = state.graphics.boundRight - state.graphics.boundLeft

      state.graphics.zoom = Math.min (
        state.graphics.sizeX,
        state.graphics.sizeY
      )

      console.log(`Successful resize ${proposedCanvasWidth}, ${proposedCanvasHeight}`)
    }
  }

}

export default windowResizeHandler
