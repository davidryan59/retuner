const findModelCoordBounds = (state) => {

  let modelLeft = 1000000
  let modelRight = -1000000
  let modelUp = -1000000
  let modelDown = +1000000

  // Iterate over keys, and any other view objects, here
  for (const key of state.key.array) {

    const keyLocation = key.coords.model.current

    const x = keyLocation.x
    const y = keyLocation.y
    const r = keyLocation.r

    // View objects: (0, 0) is in bottom left corner
    modelLeft = Math.min(x-r, modelLeft)
    modelRight = Math.max(x+r, modelRight)
    modelUp = Math.max(y+r, modelUp)
    modelDown = Math.min(y-r, modelDown)

  }

  const modelStats = state.graphics.modelInfo

  modelStats.left = modelLeft
  modelStats.right = modelRight
  modelStats.up = modelUp
  modelStats.down = modelDown

  modelStats.centreX = 0.5 * (modelLeft + modelRight)
  modelStats.centreY = 0.5 * (modelUp + modelDown)

  modelStats.sizeX = modelRight - modelLeft
  modelStats.sizeY = modelUp - modelDown

  modelStats.zoom = Math.min(
    modelStats.sizeX,
    modelStats.sizeY
  )

}

export default findModelCoordBounds
