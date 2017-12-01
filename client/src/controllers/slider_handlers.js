import volumeSet from './audio/volume_set'

const volumeSliderHandler = (state, event) => {
  const slider = state.pageElts.sliders.volume.slider
  const oldValue = state.dB.current
  const newValue = parseFloat(slider.value)
  volumeSet(state, newValue)
  console.log(`Volume changed from ${oldValue} dB to ${newValue} dB`)
}

const spacingSliderHandler = (state, event) => {
  const slider = state.pageElts.sliders.spacing.slider
  const oldValue = "Not defined"
  const newValue = parseFloat(slider.value)
  console.log(`Spacing changed from ${oldValue} to ${newValue} - not yet implemented`)
}

const contrastSliderHandler = (state, event) => {
  const slider = state.pageElts.sliders.contrast.slider
  const oldValue = "Not defined"
  const newValue = parseFloat(slider.value)
  console.log(`Contrast changed from ${oldValue} to ${newValue} - not yet implemented`)
}

export {volumeSliderHandler, spacingSliderHandler, contrastSliderHandler}
