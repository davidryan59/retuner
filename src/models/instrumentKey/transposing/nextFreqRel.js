import getStateBoundedFrequencyModOctaves from '../../../calcs/getStateBoundedFrequencyModOctaves'

const nextFreqRel = (state, key) => {
  const keyFreq = key.transposes.ji.ratio()
  const instrumentFreq = state.freq.decimalCentreCurrent
  const nextFreq = keyFreq * instrumentFreq
  const checkedNextFreq = getStateBoundedFrequencyModOctaves(state, nextFreq)
  return checkedNextFreq
}

export default nextFreqRel
