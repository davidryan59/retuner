const setupFrequencies = (state) => {
  // Setup some default parameters
  const minFreq = 2**3           // 8 Hz
  const originalFreq = 2**8      // 256 Hz
  const maxFreq = 2**12          // 4096 Hz
  const transposing = true            // false disables transposing every key press
  const keyReleaseEndsNote = true     // false means keys are sustained
  const keyEndsPreviousPress = true   // false means one key can generate multiple tones
  // Save them into the state
  state.freqs = {}
  const stateFreqs = state.freqs
  stateFreqs.minFreq = minFreq
  stateFreqs.originalFreq = originalFreq
  stateFreqs.currentFreq = originalFreq
  stateFreqs.maxFreq = maxFreq
  stateFreqs.transposing = transposing
  stateFreqs.keyReleaseEndsNote = keyReleaseEndsNote
  stateFreqs.keyEndsPreviousPress = keyEndsPreviousPress
  console.log("Frequencies initialised")
}

export default setupFrequencies
