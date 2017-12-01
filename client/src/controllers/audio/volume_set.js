const volumeSet = (state, valueDB) => {

  const stateDB = state.dB

  const minDB = stateDB.min
  const maxDB = stateDB.max

  // Bound the requested volume above and below
  let newDB = parseFloat(valueDB)
  if (newDB < minDB) {
    newDB = minDB
  }
  if (maxDB < newDB) {
    newDB = maxDB
  }

  stateDB.current = newDB
  stateDB.updated = true
  // console.log(`Volume set to ${newDB.toFixed(1)} dB`)

}

export default volumeSet
