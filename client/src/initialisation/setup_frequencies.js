const setupFrequencies = (state) => {
  state.freqs = {}
  const stateFreqs = state.freqs
  stateFreqs.originalFreq = 2**8      // 256 Hz
  stateFreqs.minFreq = 2**3           // 8 Hz
  stateFreqs.maxFreq = 2**12          // 4096 Hz
  // Osc Freq is Oscillation Frequency,
  // the frequency of the last note played
  stateFreqs.oscFreq = stateFreqs.originalFreq
  console.log("Frequencies initialised")
}

export default setupFrequencies
