const resetToOriginalFreq = (state, key) => {
  const stateFreqs = state.freqs
  const originalFreq = stateFreqs.originalFreq
  console.log(
    "Resetting instrument centre frequency to original value of",
    originalFreq.toFixed(2), "Hz"
  )
  stateFreqs.current.freq = originalFreq
}

export default resetToOriginalFreq
