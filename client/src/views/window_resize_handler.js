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
      state.graphics.boundRight = proposedCanvasWidth
      state.graphics.boundDown = proposedCanvasHeight
      console.log(`Successful resize ${proposedCanvasWidth}, ${proposedCanvasHeight}`)
    }
  }

}

export default windowResizeHandler
