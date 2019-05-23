const nextFreqAbsHz = (state, key) => {
  // const baseFreqHz = state.param.baseFrequencyHz
  const baseFreqHz = state.slider.baseFreq.getValue()
  const nextFreqRel = key.transposes.getNextFreqRel(state, key)
  return baseFreqHz * nextFreqRel
}

export default nextFreqAbsHz
