const setupFrequencies = (state) => {
  // Setup some default parameters
  // Base frequency is now in Important parameters
  // Currently (30th Nov 2017) set to 256 Hz
  const minFreq = 4.5 / 256            // Relative: (9/8)*(1/64). Absolute: 4.5 Hz
  const maxFreq = 2**12 / 256          // Relative: 16/1. Absolute: 4096 Hz
  const transposing = true            // false disables transposing every key press
  const keyReleaseEndsNote = false     // false means keys are sustained
  const keyEndsPreviousPress = false   // false means one key can generate multiple tones
  // Save them into the state
  state.freq = {}
  const stateFreq = state.freq
  stateFreq.decimalCentreMin = minFreq
  stateFreq.decimalCentreMax = maxFreq
  stateFreq.transposing = transposing
  stateFreq.keyReleaseEndsNote = keyReleaseEndsNote
  stateFreq.keyEndsPreviousPress = keyEndsPreviousPress
  // Centre frequency stuff
  stateFreq.decimalCentreCurrent = 1
  stateFreq.fractCentre = {}
  // .freq is the decimal, .fractCentre is the prime/exponent representation

  console.log("Frequencies initialised")
}

export default setupFrequencies
