const resetToOriginalFreq = (state, key) => {
  const stateFreqs = state.freqs
  const originalFreq = stateFreqs.originalFreq
  console.log(
    "Resetting instrument centre frequency to original value of",
    Math.round(originalFreq*100)/100, "Hz"
  )
  stateFreqs.currentFreq = originalFreq
}

export default resetToOriginalFreq
