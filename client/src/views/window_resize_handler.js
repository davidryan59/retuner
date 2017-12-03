// const heightToWidthRatio = 0.375   // Original value
// const heightToWidthRatio = 0.5
const heightToWidthRatio = 0.4

const windowResizeHandler = (state, event) => {
  // 'event' is not used, since window info can be
  // retrieved directly from 'window' and this works
  // even when an event is not supplied, e.g. on initialisation

  const stateGraphics = state.graphics
  const canvasStats = stateGraphics.canvasInfo

  const currentCanvasWidth = canvasStats.boundRight   // boundLeft is always zero
  const newWindowWidth = window.innerWidth
  const proposedCanvasWidth = newWindowWidth - 100

  // Don't allow a canvas less than 100 pixels wide
  if (proposedCanvasWidth > 100) {
    const canvasAmendWidthRatio = proposedCanvasWidth / currentCanvasWidth
    // Only resize if window has changed size enough
    if (canvasAmendWidthRatio < 0.96 || 1.04 < canvasAmendWidthRatio) {
      const proposedCanvasHeight = Math.round(heightToWidthRatio * proposedCanvasWidth)
      const canvasElt = state.pageElts.canvas
      canvasElt.width = proposedCanvasWidth
      canvasElt.height = proposedCanvasHeight

      // For canvas, (0, 0) is in top left corner
      canvasStats.boundUp = 0
      canvasStats.boundDown = proposedCanvasHeight
      canvasStats.boundLeft = 0
      canvasStats.boundRight = proposedCanvasWidth

      canvasStats.centreX = 0.5 * (canvasStats.boundLeft + canvasStats.boundRight)
      canvasStats.centreY = 0.5 * (canvasStats.boundUp + canvasStats.boundDown)

      canvasStats.sizeX = canvasStats.boundDown - canvasStats.boundUp
      canvasStats.sizeY = canvasStats.boundRight - canvasStats.boundLeft

      canvasStats.zoom = Math.min (
        canvasStats.sizeX,
        canvasStats.sizeY
      )

      console.log(`Successful resize ${proposedCanvasWidth}, ${proposedCanvasHeight}`)
    }
  }

}

export default windowResizeHandler
