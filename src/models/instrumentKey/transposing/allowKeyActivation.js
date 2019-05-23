const allowKeyActivation = (state, key) => {
  // NEW CODE
  // When frequencies 'wrap around' by octaves if out of range
  return true

  // // PREVIOUS CODE
  // // When keys deactivated if they are out of range
  // const stateFreq = state.freq
  // const minFreq = stateFreq.decimalCentreMin
  // const maxFreq = stateFreq.decimalCentreMax
  // const currentFreq = stateFreq.decimalCentreCurrent
  // const newFreq = currentFreq * key.transposes.decimalRel
  // if (newFreq < minFreq) {
  //   return false
  // }
  // if (maxFreq < newFreq) {
  //   return false
  // }
  // return true
}

export default allowKeyActivation
