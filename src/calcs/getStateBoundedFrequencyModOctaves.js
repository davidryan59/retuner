import getBoundedFrequencyModOctaves from './getBoundedFrequencyModOctaves'

const getStateBoundedFrequencyModOctaves = (state, freq) => {

  const stateFreq = state.freq
  const minFreq = stateFreq.decimalCentreMin
  const maxFreq = stateFreq.decimalCentreMax
  return getBoundedFrequencyModOctaves(minFreq, freq, maxFreq)

}

export default getStateBoundedFrequencyModOctaves
