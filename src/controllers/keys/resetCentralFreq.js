import recalcAllNotations from '../../notation/recalc_all_notations'

const resetCentralFreq = (state, key) => {
  const stateFreq = state.freq
  // const baseFreqHz = state.param.baseFrequencyHz
  const baseFreqHz = state.slider.baseFreq.getValue()
  console.log(
    "Resetting instrument centre frequency to original value of",
    baseFreqHz.toFixed(2), "Hz"
  )
  stateFreq.decimalCentreCurrent = 1
  stateFreq.fractCentre = {}
  recalcAllNotations(state)
}

export default resetCentralFreq
