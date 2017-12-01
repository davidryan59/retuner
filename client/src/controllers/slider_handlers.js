import setVolumeDB from './sliders/set_volume_db'
import setKeyColourContrast from './sliders/set_key_colour_contrast'
import setKeySpacing from './sliders/set_key_spacing'

const volumeSliderHandler = (state, event) => {
  const slider = state.pageElts.sliders.volume.slider
  const newValue = parseFloat(slider.value)
  setVolumeDB(state, newValue)
}

const spacingSliderHandler = (state, event) => {
  const slider = state.pageElts.sliders.spacing.slider
  const newValue = parseFloat(slider.value)
  setKeySpacing(state, newValue)
}

const contrastSliderHandler = (state, event) => {
  const slider = state.pageElts.sliders.contrast.slider
  const newValue = parseFloat(slider.value)
  setKeyColourContrast(state, newValue)
}

export {volumeSliderHandler, spacingSliderHandler, contrastSliderHandler}
