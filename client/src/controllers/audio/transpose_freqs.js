const transposeFreqs = (state, transposeFactor) => {
  // Get a reference for the object where all frequencies are stored
  const stateFreqs = state.freqs
  // Need min and max to do the calc
  const minFreq = stateFreqs.minFreq
  const maxFreq = stateFreqs.maxFreq
  // Calculate the new frequency
  const oldFreq = stateFreqs.oscFreq
  let newFreq = oldFreq * transposeFactor
  if (newFreq < minFreq) {
    newFreq = minFreq
  }
  if (maxFreq < newFreq) {
    newFreq = maxFreq
  }
  // Do the change
  console.log(
    "Frequency changed from", Math.round(oldFreq*100)/100,
    "Hz to", Math.round(newFreq*100)/100, "Hz"
  )
  stateFreqs.oscFreq = newFreq
}

export default transposeFreqs
