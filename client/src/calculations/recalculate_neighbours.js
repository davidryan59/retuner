const recalculateNeighbours = (state) => {

  const keyArray = state.keys
  const maxKeys = keyArray.length

  for (let i=0; i<maxKeys-1; i++) {
    const keyI = state.keys[i]
    const xi = keyI.location.x
    const yi = keyI.location.y
    for (let j=i+1; j<maxKeys; j++) {
      const keyJ = state.keys[j]
      const xj = keyI.location.x
      const yj = keyI.location.y
      const distance = ((xi-xj)**2 + (yi-yj)**2) ** 0.5
      // Scale of keyboard is that keys should be separated
      // by around 10 units
      // Say anything less than 19 pixels apart is linked.
      if (distance<19.5) {
        keyI.force.neighbours.push(j)
        keyJ.force.neighbours.push(i)
      }
    }
  }


}

export default recalculateNeighbours
