const cycleSustainOptions = (state, key) => {

  const keyReleaseEndsNote = state.freq.keyReleaseEndsNote       // 1
  const keyEndsPreviousPress = state.freq.keyEndsPreviousPress   // 2

  // If key release ends note, then
  // an option for a further press to end the current note
  // will have no effect
  // Hence there are 3 options, not 4
  // and this method will cycle through them

  if (keyReleaseEndsNote) {
    state.freq.keyReleaseEndsNote = false
    state.freq.keyEndsPreviousPress = true
    console.log("Note sustained until next key press")
  } else {
    if (keyEndsPreviousPress) {
      state.freq.keyReleaseEndsNote = false
      state.freq.keyEndsPreviousPress = false
      console.log("Note sustained until its time runs out")
    } else {
      state.freq.keyReleaseEndsNote = true
      state.freq.keyEndsPreviousPress = true
      console.log("Note ended on key release")
    }
  }

}

export default cycleSustainOptions
