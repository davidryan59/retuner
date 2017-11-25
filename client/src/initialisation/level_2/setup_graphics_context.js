const setupGraphicsContext = (state) => {
  // Get variables
  const canvasElt = state.pageElts.canvas
  const context = canvasElt.getContext('2d')
  const boundLeft = 0
  const boundRight = canvasElt.width
  const boundUp = 0
  const boundDown = canvasElt.height
  // Store them in state
  state.graphics = {}
  const stateGraphics = state.graphics
  stateGraphics.context = context
  stateGraphics.boundLeft = boundLeft
  stateGraphics.boundRight = boundRight
  stateGraphics.boundUp = boundUp
  stateGraphics.boundDown = boundDown
  console.log("Graphics context initialised")
}

export default setupGraphicsContext
