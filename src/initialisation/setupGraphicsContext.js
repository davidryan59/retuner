const getPixelRatio = context => {
  const backingStore = context.webkitBackingStorePixelRatio
    || context.mozBackingStorePixelRatio
    || context.msBackingStorePixelRatio
    || context.oBackingStorePixelRatio
    || context.backingStorePixelRatio
    || 1
  return (window.devicePixelRatio || 1) / backingStore
}

const setupGraphicsContext = state => {

  // Context
  const canvasElt = state.pageElt.canvas
  const context = canvasElt.getContext('2d')
  state.context.graphics = context

  // Work in progress - get pixel ratio
  // Needed for high DPI screens, e.g. Mac Retina
  console.log(`WORK IN PROGRESS: Pixel ratio is ${getPixelRatio(context)}`)

  // Graphics info
  const boundLeft = 0
  const boundRight = canvasElt.width
  const boundUp = 0
  const boundDown = canvasElt.height

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
