const transposeFreqs = (state, transposeFactor) => {
  const oldFreq = state.oscFreq
  const newFreq = oldFreq * transposeFactor
  console.log(
    "Frequency changed from", Math.round(oldFreq*100)/100,
    "Hz to", Math.round(newFreq*100)/100, "Hz"
  )
  state.oscFreq = newFreq
}

export default transposeFreqs
