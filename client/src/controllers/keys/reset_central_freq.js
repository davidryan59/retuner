import recalcAllNotations from '../../notation/recalc_all_notations'

const resetCentralFreq = (state, key) => {
  const stateFreqs = state.freqs
  const baseFreqHz = state.params.baseFrequencyHz
  console.log(
    "Resetting instrument centre frequency to original value of",
    baseFreqHz.toFixed(2), "Hz"
  )
  stateFreqs.current.freq = 1
  stateFreqs.current.fractCentralAbs = {}
  recalcAllNotations(state)
}

export default resetCentralFreq
