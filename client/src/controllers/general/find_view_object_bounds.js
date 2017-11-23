const findViewObjectBounds = (state) => {

  let viewObjectsLeft = 1000000
  let viewObjectsRight = -1000000
  let viewObjectsUp = -1000000
  let viewObjectsDown = +1000000

  // Iterate over keys, and any other view objects, here
  for (const key of state.keys) {

    const x = key.location.x
    const y = key.location.y
    const r = key.location.r

    // View objects: (0, 0) is in bottom left corner
    viewObjectsLeft = Math.min(x-r, viewObjectsLeft)
    viewObjectsRight = Math.max(x+r, viewObjectsRight)
    viewObjectsUp = Math.max(y+r, viewObjectsUp)
    viewObjectsDown = Math.min(y-r, viewObjectsDown)

  }

  state.graphics.viewObjects = {}

  state.graphics.viewObjects.left = viewObjectsLeft
  state.graphics.viewObjects.right = viewObjectsRight
  state.graphics.viewObjects.up = viewObjectsUp
  state.graphics.viewObjects.down = viewObjectsDown

  state.graphics.viewObjects.centreX = 0.5 * (viewObjectsLeft + viewObjectsRight)
  state.graphics.viewObjects.centreY = 0.5 * (viewObjectsUp + viewObjectsDown)

  state.graphics.viewObjects.sizeX = viewObjectsRight - viewObjectsLeft
  state.graphics.viewObjects.sizeY = viewObjectsUp - viewObjectsDown

  state.graphics.viewObjects.overallZoom = Math.min(
    state.graphics.viewObjects.sizeX,
    state.graphics.viewObjects.sizeY
  )

}

export default findViewObjectBounds
