import getStateBoundedFrequencyModOctaves from '../../../calculations/get_state_bounded_frequency_mod_octaves'

const nextFreqRel = (state, key) => {

  const keyFreq = key.transposes.decimalRel
  const instrumentFreq = state.freq.decimalCentreCurrent
  const nextFreq = keyFreq * instrumentFreq
  const checkedNextFreq = getStateBoundedFrequencyModOctaves(state, nextFreq)
  return checkedNextFreq

}

export default nextFreqRel
