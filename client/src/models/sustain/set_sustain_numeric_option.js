const setSustainNumericOption = (state, key, numericOption) => {

  const stateFreq = state.freq

  if (numericOption === 0) {
    // Option 0
    // Sustain OFF
    stateFreq.keyReleaseEndsNote = true
    stateFreq.keyEndsPreviousPress = true
  } else if (numericOption === 1) {
    // Option 1
    // Sustain ON* (*except for repeating keys)
    stateFreq.keyReleaseEndsNote = false
    stateFreq.keyEndsPreviousPress = true
  } else {
    // Option 2, DEFAULT
    // Sustain ON
    stateFreq.keyReleaseEndsNote = false
    stateFreq.keyEndsPreviousPress = false
  }

}

export default setSustainNumericOption
