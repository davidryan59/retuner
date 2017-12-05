const setupGraphicsContext = (state) => {

  // Context
  const canvasElt = state.pageElts.canvas
  const context = canvasElt.getContext('2d')
  state.context.graphics = context

  // Graphics info
  const boundLeft = 0
  const boundRight = canvasElt.width
  const boundUp = 0
  const boundDown = canvasElt.height

  state.graphics = {}
  const stateGraphics = state.graphics

  stateGraphics.modelInfo = {}

  stateGraphics.canvasInfo = {}
  const canvasStats = stateGraphics.canvasInfo
  canvasStats.boundLeft = boundLeft
  canvasStats.boundRight = boundRight
  canvasStats.boundUp = boundUp
  canvasStats.boundDown = boundDown

  console.log("Graphics context initialised for canvas")
}

export default setupGraphicsContext
