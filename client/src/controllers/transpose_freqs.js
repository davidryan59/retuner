const transposeFreqs = (state, transposeFactor) => {
  const oldFreq = state.oscFreq
  const newFreq = oldFreq * transposeFactor
  state.oscFreq = newFreq
  console.log(
    "Frequency changed by factor of", transposeFactor,
    "from", oldFreq, "to", newFreq
  )
}

export default transposeFreqs
