import { convertCanvasToModelCoords } from './convertCoords'

const findKeyByMousePosition = (state, canvasX, canvasY) => {

  const {modelX, modelY} = convertCanvasToModelCoords(state, canvasX, canvasY)

  const stateKey = state.key
  const keyIndices = stateKey.indexOrderArray
  const numKeys = keyIndices.length

  for (let i=0; i<numKeys; i++) {
    // Need to test keys for mouse in opposite order to drawing order
    const keyIndex = keyIndices[numKeys-i-1]
    const key = stateKey.array[keyIndex]

    const keyLocation = key.coords.model.current
    const keyX = keyLocation.x
    const keyY = keyLocation.y
    const keyR = keyLocation.r
    const keyExtraR = keyLocation.extraR
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
