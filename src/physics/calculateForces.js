const anchorForceFactor = 0.001
const neighbourForceFactor = 0.01

const calculateForces = state => {

  const keyArray = state.key.array

  // Reset forces first
  for (const key of keyArray) {
    const theForce = key.coords.model.force
    theForce.x = 0
    theForce.y = 0
    // May the Force be with you!
  }

  for (const key of keyArray) {
    // Get relevant objects
    const keyAnchor = key.coords.model.anchor
    const keyLocation = key.coords.model.current
    const keyForce = key.coords.model.force
    // Start by adding force from anchoring
    const currentX = keyLocation.x
    const currentY = keyLocation.y
    const anchorX = keyAnchor.x
    const anchorY = keyAnchor.y

    const dAX = anchorX - currentX
    const dAY = anchorY - currentY
    const anchorDistance = (dAX * dAX + dAY * dAY) ** 0.5
    keyForce.x += anchorForceFactor * anchorDistance * dAX
    keyForce.y += anchorForceFactor * anchorDistance * dAY

    // Add any force from neighbours
    // Note that the neighbour is only recorded on 1 out of 2,
    // and needs to produce equal and opposite forces on both
    const currentR = keyLocation.r
    for (const neighbourKeyIndex of keyForce.neighbours) {
      const nearbyKey = keyArray[neighbourKeyIndex]
      const nearbyKeyLocation = nearbyKey.coords.model.current
      const nearbyKeyForce = nearbyKey.coords.model.force
      const neighbourX = nearbyKeyLocation.x
      const neighbourY = nearbyKeyLocation.y
      const neighbourR = nearbyKeyLocation.r

      const radiusSum = currentR + neighbourR
      const rSumSq = radiusSum * radiusSum

      const dX = neighbourX-currentX
      const dY = neighbourY-currentY
      const distSq = dX * dX + dY * dY

      if (distSq < rSumSq) {
        // Perform a force between the two keys which pushes them apart
        const forceLaw = (rSumSq - distSq) / distSq
        // Force law is like a spring here
        const forceX = neighbourForceFactor * forceLaw * dX
        const forceY = neighbourForceFactor * forceLaw * dY

        keyForce.x -= forceX
        keyForce.y -= forceY
        nearbyKeyForce.x += forceX
        nearbyKeyForce.y += forceY
      }
    }
  }
}

export default calculateForces
