const setupFrequencies = (state) => {
  state.freqs = {}
  state.freqs.originalFreq = 2**8      // 256 Hz
  state.freqs.minFreq = 2**-1          // 0.5 Hz
  state.freqs.maxFreq = 2**13          // 8192 Hz
  // Osc Freq is Oscillation Frequency,
  // the frequency of the last note played
  state.freqs.oscFreq = state.freqs.originalFreq
  console.log("Frequencies initialised")
}

export default setupFrequencies
