// Note that this doesn't appear to work, there are
// 65 neighbours for every key, so the distance filtering isn't working...

const neighbourFactor = 1.3

const recalculateNeighbours = (state) => {

  const keyArray = state.keys
  const maxKeys = keyArray.length

  for (const key of state.keys) {
    // Clear array (without dereferencing) by
    // setting length attribute to 0!
    key.force.neighbours.length = 0
  }

  for (let i=0; i<maxKeys-1; i++) {
    const keyI = state.keys[i]
    const xi = keyI.location.x
    const yi = keyI.location.y
    const ri = keyI.location.r
    for (let j=i+1; j<maxKeys; j++) {
      const keyJ = state.keys[j]
      const xj = keyJ.location.x
      const yj = keyJ.location.y
      const rj = keyJ.location.r
      const radiuses = ri + rj
      const distance = ((xi-xj)**2 + (yi-yj)**2) ** 0.5
      // Scale of keyboard is that keys should be separated
      // by around 10 units
      // Say anything less than 19 pixels apart is linked.
      if (distance < radiuses * neighbourFactor) {
        // When I pushes on J, it causes an
        // equal and opposite reaction of J on I
        keyI.force.neighbours.push(j)
        // therefore don't add i to neighbours of J
      }
    }
  }


}

export default recalculateNeighbours
