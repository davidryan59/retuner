import recalcAllNotations from '../notation/recalc_all_notations'
import setSustainAdsrFromSlider from '../models/sustain/set_sustain_adsr_from_slider'
import baseFreqToFract from '../notation/base_freq_to_fract'

let prevMinHz = null
let prevBaseHz = null
let prevMaxHz = null

const boundSlider = (sliderModel, currentVal, minVal, maxVal) => {
  let tempVal = currentVal
  if (tempVal < minVal) {
    tempVal = minVal
  } else if (maxVal < tempVal) {
    tempVal = maxVal
  }
  if (tempVal !== currentVal) {
    sliderModel.setValue(tempVal)
  }
}

const checkSliderActivity = (state) => {

  // If sustain slider has changed, update the ADSR
  if (state.waveform.sustainValue !== state.slider.sustain.getValue()) {
    setSustainAdsrFromSlider(state)
  }

  // If min/base/max freq sliders have changed, do some updates
  // Generally, only one slider has changed at a time
  // If a slider change is detected, error check it against the other two.

  // Get sliders from state
  const stateSlider = state.slider
  const stateFreq = state.freq
  const minSlider = stateSlider.minFreq
  const baseSlider = stateSlider.baseFreq
  const maxSlider = stateSlider.maxFreq

  // Store (initial) current slider values
  let minHz = minSlider.getValue()
  let baseHz = baseSlider.getValue()
  let maxHz = maxSlider.getValue()

  // Edit changed values if they are outside bounds
  // Only allow one change per loop
  // This is where the three sliders interact and bound each other!
  if (prevBaseHz !== baseHz) {
    boundSlider(baseSlider, baseHz, minHz, maxHz)
    baseHz = baseSlider.getValue()
    stateFreq.fractBase = baseFreqToFract(baseHz)  // Used for note names
    console.log(`Base note 1/1 has frequency ${baseHz} Hz and note name from fract:`)
    console.dir(stateFreq.fractBase)
  } else if (prevMinHz !== minHz) {
    boundSlider(minSlider, minHz, 10e-2, Math.min(baseHz, maxHz/2))
    minHz = minSlider.getValue()
  } else if (prevMaxHz !== maxHz) {
    boundSlider(maxSlider, maxHz, Math.max(baseHz, minHz*2), 10e6)
    maxHz = maxSlider.getValue()
  }

  // Make the previous values the current checked values
  prevMinHz = minHz
  prevBaseHz = baseHz
  prevMaxHz = maxHz

  // The decimal centre variables are the ones which
  // actually bound the relative frequencies on the instrument
  // Recalculate them here
  const newMin = minHz / baseHz
  const newMax = maxHz / baseHz
  const oldMin = stateFreq.decimalCentreMin
  const oldMax = stateFreq.decimalCentreMax
  const diffMin = Math.abs(newMin - oldMin)
  const diffMax = Math.abs(newMax - oldMax)
  if (0.001 < diffMin + diffMax) {
    // One of the sliders has moved!
    // Update decimal centres and notations
    stateFreq.decimalCentreMin = newMin
    stateFreq.decimalCentreMax = newMax
    recalcAllNotations(state)
  }

}

export default checkSliderActivity
