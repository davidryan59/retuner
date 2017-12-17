import getBoundedFrequencyModOctaves from '../../../calculations/get_bounded_frequency_mod_octaves'

const nextFreqRel = (state, key) => {
  // Things like bounding by min and max are done here.
  const keyFreq = key.transposes.decimalRel

  const stateFreq = state.freq
  const instrumentFreq = stateFreq.decimalCentreCurrent
  const maxFreq = stateFreq.decimalCentreMax
  const minFreq = stateFreq.decimalCentreMin

  let result = keyFreq * instrumentFreq
  result = getBoundedFrequencyModOctaves(minFreq, result, maxFreq)
  return result
}

export default nextFreqRel
