const allowKeyActivation = (state, key) => {
  const stateFreq = state.freq
  const minFreq = stateFreq.decimalCentreMin
  const maxFreq = stateFreq.decimalCentreMax
  const currentFreq = stateFreq.decimalCentreCurrent
  const newFreq = currentFreq * key.transposes.decimalRel
  if (newFreq < minFreq) {
    return false
  }
  if (maxFreq < newFreq) {
    return false
  }
  return true
}

export default allowKeyActivation
