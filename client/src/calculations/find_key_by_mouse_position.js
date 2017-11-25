import convertCanvasToModelCoords from './convert_coords/convert_canvas_to_model_coords'

const findKeyByMousePosition = (state, canvasX, canvasY) => {

  const {modelX, modelY} = convertCanvasToModelCoords(state, canvasX, canvasY)

  const keyIndices = state.keyOrderArray
  const numKeys = keyIndices.length

  for (let i=0; i<numKeys; i++) {
    // Need to test keys for mouse in opposite order to drawing order
    const keyIndex = keyIndices[numKeys-i-1]
    const key = state.keys[keyIndex]

    const keyX = key.location.x
    const keyY = key.location.y
    const keyR = key.location.r
    const keyExtraR = key.location.extraR
    const totalR2 = (keyR * keyExtraR) ** 2

    const mouseDistance2 = (modelX-keyX)**2 + (modelY-keyY)**2

    if (mouseDistance2 < totalR2) {
      return key
    }
  }

  // Mouse click was not over any of the keys
  return null
}

export default findKeyByMousePosition
