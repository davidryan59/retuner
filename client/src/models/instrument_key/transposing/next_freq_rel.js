const nextFreqRel = (state, key) => {
  // Things like bounding by min and max are done here.
  const baseFreqHz = state.param.baseFrequencyHz
  const keyFreq = key.transposes.decimalCentreCurrent

  const stateFreq = state.freq
  const instrumentFreq = stateFreq.decimalCentreCurrent
  const maxFreq = stateFreq.decimalCentreMax
  const minFreq = stateFreq.decimalCentreMin

  let result = keyFreq * instrumentFreq
  result = Math.min(maxFreq, result)
  result = Math.max(minFreq, result)
  return result
}

export default nextFreqRel
