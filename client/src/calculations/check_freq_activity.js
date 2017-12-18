import recalcAllNotations from '../notation/recalc_all_notations'

const checkFreqActivity = (state) => {

  // Get some stuff from central parameters
  const stateSlider = state.slider
  const stateFreq = state.freq

  const baseFreqHz = stateSlider.baseFreq.getValue()

  const minFreqHz = stateSlider.minFreq.getValue()
  const maxFreqHz = stateSlider.maxFreq.getValue()

  const newMin = minFreqHz / baseFreqHz
  const newMax = maxFreqHz / baseFreqHz

  const oldMin = stateFreq.decimalCentreMin
  const oldMax = stateFreq.decimalCentreMax

  const diffMin = Math.abs(newMin - oldMin)
  const diffMax = Math.abs(newMax - oldMax)

  if (0.001 < diffMin + diffMax) {
    // One of the sliders has moved!
    // Update variables
    stateFreq.decimalCentreMin = newMin
    stateFreq.decimalCentreMax = newMax
    // and (may) need to update label texts
    recalcAllNotations(state)
  }

}

export default checkFreqActivity
