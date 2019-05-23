const neighbourFactor = 1.3

const calculateNeighbouringKeys = state => {

  const keyArray = state.key.array
  const maxKeys = keyArray.length

  for (const key of keyArray) {
    // Clear array (without dereferencing) by
    // setting length attribute to 0!
    key.coords.model.force.neighbours.length = 0
  }

  for (let i=0; i<maxKeys-1; i++) {
    const keyI = keyArray[i]
    const keyLocationI = keyI.coords.model.current
    const xi = keyLocationI.x
    const yi = keyLocationI.y
    const ri = keyLocationI.r
    for (let j=i+1; j<maxKeys; j++) {
      const keyJ = keyArray[j]
      const keyLocationJ = keyJ.coords.model.current
      const xj = keyLocationJ.x
      const yj = keyLocationJ.y
      const rj = keyLocationJ.r
      const radiuses = ri + rj
      const distance = ((xi-xj)**2 + (yi-yj)**2) ** 0.5
      // Make two keys neighbours if the distance between
      // their centre points is less than the
      // radius sum, times a constant factor
      if (distance < radiuses * neighbourFactor) {
        // When I pushes on J, it causes an
        // equal and opposite reaction of J on I
        keyI.coords.model.force.neighbours.push(j)
        // therefore don't add i to neighbours of J
      }
    }
  }

}

export default calculateNeighbouringKeys
