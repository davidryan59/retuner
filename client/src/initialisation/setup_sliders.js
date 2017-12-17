import setupDecibels from './sliders/setup_decibels'
import setupBPM from './sliders/setup_bpm'
import setupKeyColourContrast from './sliders/setup_key_colour_contrast'
import setupKeySpacing from './sliders/setup_key_spacing'

const setupSliders = (state) => {

  setupDecibels(state)
  setupBPM(state)
  setupKeyColourContrast(state)
  setupKeySpacing(state)

}

export default setupSliders
