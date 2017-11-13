const setupFrequencies = (state) => {
  state.freqs = {}
  const stateFreqs = state.freqs
  stateFreqs.originalFreq = 2**8      // 256 Hz
  stateFreqs.minFreq = 2**-1          // 0.5 Hz
  stateFreqs.maxFreq = 2**13          // 8192 Hz
  // Osc Freq is Oscillation Frequency,
  // the frequency of the last note played
  stateFreqs.oscFreq = stateFreqs.originalFreq
  console.log("Frequencies initialised")
}

export default setupFrequencies
