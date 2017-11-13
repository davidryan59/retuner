const transposeFreqs = (state, key) => {

  // Get the amount to transpose by, from the key
  const keyTransposes = key.transposes
  let transposeFactor = 1
  if (keyTransposes) {
    const transposeNum = key.transposes.num || 1
    const transposeDenom = key.transposes.denom || 1
    transposeFactor = transposeNum / transposeDenom
  }

  // Get the relevant state object
  const stateFreqs = state.freqs
  // Retrieve relevant state variables
  const minFreq = stateFreqs.minFreq
  const currentFreq = stateFreqs.currentFreq
  const maxFreq = stateFreqs.maxFreq
  // Calculate the new frequency, bounded
  let newFreq = currentFreq * transposeFactor
  if (newFreq < minFreq) {
    newFreq = minFreq
  }
  if (maxFreq < newFreq) {
    newFreq = maxFreq
  }
  // Do the change
  stateFreqs.currentFreq = newFreq
  console.log(
    "Instrument central frequency changed from", Math.round(currentFreq*100)/100,
    "Hz to", Math.round(newFreq*100)/100, "Hz"
  )
}

export default transposeFreqs
