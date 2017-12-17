const setupFrequencies = (state) => {

  // Get some stuff from central parameters
  const stateParam = state.param
  const baseFrequencyHz = stateParam.baseFrequencyHz
  const currentMaxHz = stateParam.currentMaxHz
  const currentMinHz = stateParam.currentMinHz

  const transposing = true             // false disables transposing every key press
  const keyReleaseEndsNote = false     // false means keys are sustained
  const keyEndsPreviousPress = false   // false means one key can generate multiple tones

  state.freq = {}
  const stateFreq = state.freq
  stateFreq.decimalCentreMin = currentMinHz / baseFrequencyHz
  stateFreq.decimalCentreMax = currentMaxHz / baseFrequencyHz
  stateFreq.transposing = transposing
  stateFreq.keyReleaseEndsNote = keyReleaseEndsNote
  stateFreq.keyEndsPreviousPress = keyEndsPreviousPress

  stateFreq.decimalCentreCurrent = 1
  stateFreq.fractCentre = {}
  // .freq is the decimal, .fractCentre is the prime/exponent representation

  console.log("Frequencies initialised")
}

export default setupFrequencies
