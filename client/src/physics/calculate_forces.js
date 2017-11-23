

const anchorForceFactor = 0.001
const neighbourForceFactor = 0.01
// const restoreFactorR = 0.08
// const restoreFactorExtraR = 0.05
// const pxFromPress = 30       // Distributed across all keys, via press

const calculateForces = (state) => {

  // Reset forces first
  for (const key of state.keys) {
    key.force.x = 0
    key.force.y = 0
  }

  for (const key of state.keys) {

    // Start by adding force from anchoring
    const currentX = key.location.x
    const currentY = key.location.y
    const anchorX = key.anchors.x
    const anchorY = key.anchors.y

    const dAX = anchorX - currentX
    const dAY = anchorY - currentY
    const anchDist = (dAX * dAX + dAY * dAY) ** 0.5
    key.force.x += anchorForceFactor * anchDist * dAX
    key.force.y += anchorForceFactor * anchDist * dAY

    // Add any force from neighbours
    // Note that the neighbour is only recorded on 1 out of 2,
    // and needs to produce equal and opposite forces on both
    const currentR = key.location.r
    for (const neighbourKeyIndex of key.force.neighbours) {
      const nearbyKey = state.keys[neighbourKeyIndex]
      const neighbourX = nearbyKey.location.x
      const neighbourY = nearbyKey.location.y
      const neighbourR = nearbyKey.location.r

      const radiuses = currentR + neighbourR
      const r2 = radiuses * radiuses

      const dX = neighbourX-currentX
      const dY = neighbourY-currentY
      const d2 = dX * dX + dY * dY

      if (d2 < r2) {
        // Perform a force between the two keys which pushes them apart
        const forceLaw = (r2-d2)/d2
        // Force law is like a spring here
        const forceX = forceLaw * neighbourForceFactor * dX
        const forceY = forceLaw * neighbourForceFactor * dY

        key.force.x += -forceX
        key.force.y += -forceY
        nearbyKey.force.x += forceX
        nearbyKey.force.y += forceY
      }
    }
  }
}

export default calculateForces
