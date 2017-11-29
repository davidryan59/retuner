const volumeChange = (state, unitsToIncrease) => {

  // Get the relevant state object
  const stateDB = state.dB
  // Retrieve relevant state variables
  const minDB = stateDB.min
  const currentDB = stateDB.current
  const stepDB = stateDB.step
  const maxDB = stateDB.max
  // Make a new volume, bounded
  let newDB = currentDB + stepDB * unitsToIncrease
  if (newDB < minDB) {
    newDB = minDB
  }
  if (maxDB < newDB) {
    newDB = maxDB
  }
  // Do the change
  stateDB.current = newDB
  console.log(
    "Volume change",
    " - decibels changed from", currentDB.toFixed(1),
    "dB to", newDB.toFixed(1), "dB"
  )
}

export default volumeChange
