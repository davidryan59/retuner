const setupFrequencies = (state) => {

  // Get some stuff from central parameters
  const stateParam = state.param
  // const currentBaseHz = stateParam.baseFrequencyHz
  // const currentMaxHz = stateParam.currentMaxHz
  // const currentMinHz = stateParam.currentMinHz
  const currentBaseHz = state.slider.baseFreq.getValue()
  const currentMaxHz = state.slider.maxFreq.getValue()
  const currentMinHz = state.slider.minFreq.getValue()

  const transposing = true             // false disables transposing every key press
  const keyReleaseEndsNote = false     // false means keys are sustained
  const keyEndsPreviousPress = false   // false means one key can generate multiple tones

  const stateFreq = state.freq
  stateFreq.decimalCentreMin = currentMinHz / currentBaseHz
  stateFreq.decimalCentreMax = currentMaxHz / currentBaseHz
  stateFreq.transposing = transposing
  stateFreq.keyReleaseEndsNote = keyReleaseEndsNote
  stateFreq.keyEndsPreviousPress = keyEndsPreviousPress

  stateFreq.decimalCentreCurrent = 1
  stateFreq.fractCentre = {}
  // .freq is the decimal, .fractCentre is the prime/exponent representation

  console.log("Frequencies initialised")
}

export default setupFrequencies
