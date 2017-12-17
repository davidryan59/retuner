import setupDecibels from './sliders/setup_decibels'
import setupBPM from './sliders/setup_bpm'
import setupKeyColourContrast from './sliders/setup_key_colour_contrast'
import setupKeySpacing from './sliders/setup_key_spacing'
import setupMinFreq from './sliders/setup_min_freq'
import setupBaseFreq from './sliders/setup_base_freq'
import setupMaxFreq from './sliders/setup_max_freq'
import setupSustain from './sliders/setup_sustain'

const setupSliders = (state) => {

  setupDecibels(state)
  setupBPM(state)
  setupKeyColourContrast(state)
  setupKeySpacing(state)
  setupMinFreq(state)
  setupBaseFreq(state)
  setupMaxFreq(state)
  setupSustain(state)

}

export default setupSliders
