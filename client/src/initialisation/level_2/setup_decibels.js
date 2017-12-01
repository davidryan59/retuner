const setupDecibels = (state) => {
  // +11dB, -9dB
  // correspond to amplitudes of
  // 1, 0.1 respectively
  // (Can extend this on a log scale)

  // Setup some default parameters
  const minDB = -21
  const initialDB = 1
  const stepDB = 2
  const maxDB = 11
  // Assign them into state
  state.dB = {}
  const stateDB = state.dB
  stateDB.min = minDB
  stateDB.initial = initialDB
  stateDB.current = initialDB
  stateDB.step = stepDB
  stateDB.max = maxDB
  stateDB.updated = true
  // Log the success
  console.log(
    "Decibels initialised. Min", minDB,
    "initially", initialDB,
    "step", stepDB,
    "max", maxDB
  )
}

export default setupDecibels
