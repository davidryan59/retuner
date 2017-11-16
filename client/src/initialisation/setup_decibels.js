const setupDecibels = (state) => {
  // +20dB, 0dB, -20dB, -40dB
  // correspond to amplitudes of
  // 1, 0.1, 0.01, 0.001 respectively

  // Setup some default parameters
  const minDB = -40
  const initialDB = 4
  const stepDB = 2
  const maxDB = 20
  // Assign them into state
  state.dB = {}
  const stateDB = state.dB
  stateDB.min = minDB
  stateDB.initial = initialDB
  stateDB.current = initialDB
  stateDB.step = stepDB
  stateDB.max = maxDB
  // Log the success
  console.log(
    "Decibels initialised. Min", minDB,
    "initially", initialDB,
    "step", stepDB,
    "max", maxDB
  )
}

export default setupDecibels
