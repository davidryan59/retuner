const setupFrequencies = (state) => {
  // Setup some default parameters
  const minFreq = 2**3           // 8 Hz
  const originalFreq = 2**8      // 256 Hz
  const maxFreq = 2**12          // 4096 Hz
  // Save them into the state
  state.freqs = {}
  const stateFreqs = state.freqs
  stateFreqs.minFreq = minFreq
  stateFreqs.originalFreq = originalFreq
  stateFreqs.currentFreq = originalFreq
  stateFreqs.maxFreq = maxFreq
  console.log("Frequencies initialised")
}

export default setupFrequencies
