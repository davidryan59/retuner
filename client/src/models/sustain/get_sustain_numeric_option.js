const getSustainNumericOption = (state, key) => {

  const keyReleaseEndsNote = state.freq.keyReleaseEndsNote
  const keyEndsPreviousPress = state.freq.keyEndsPreviousPress

  if (keyReleaseEndsNote) {
    return 0        // Sustain OFF
  } else {
    if (keyEndsPreviousPress) {
      return 1      // Sustain ON* (*except for repeated keys)
    } else {
      return 2      // Sustain ON
    }
  }

}

export default getSustainNumericOption
