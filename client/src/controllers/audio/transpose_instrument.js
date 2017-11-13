const transposeInstrument = (state, key) => {

  const freqFactor = key.transposes.factor
  const freqTextRelative = key.transposes.text

  // Get the relevant state object
  const stateFreqs = state.freqs
  // Retrieve relevant state variables
  const minFreq = stateFreqs.minFreq
  const currentFreq = stateFreqs.currentFreq
  const maxFreq = stateFreqs.maxFreq
  // Calculate the new frequency, bounded
  let newFreq = currentFreq * freqFactor
  if (newFreq < minFreq) {
    newFreq = minFreq
  }
  if (maxFreq < newFreq) {
    newFreq = maxFreq
  }
  // Do the change
  stateFreqs.currentFreq = newFreq
  console.log(
    "SPACE changed by", freqTextRelative,
    "from", Math.round(currentFreq*100)/100, "Hz",
    "to", Math.round(newFreq*100)/100, "Hz"
  )
}

export default transposeInstrument
