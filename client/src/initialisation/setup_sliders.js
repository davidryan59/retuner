import setupDecibels from './sliders/setup_decibels'
import setupBPM from './sliders/setup_bpm'
import setupKeyColourContrast from './sliders/setup_key_colour_contrast'
import setupKeySpacing from './sliders/setup_key_spacing'
import setupMinFreq from './sliders/setup_min_freq'
import setupBaseFreq from './sliders/setup_base_freq'
import setupMaxFreq from './sliders/setup_max_freq'
import setupSustain from './sliders/setup_sustain'

import SliderController from '../controllers/slider_controller'

const setupSliders = (state) => {

  const sliderModelTempArray = [
    setupDecibels(state),
    setupBPM(state),
    setupKeyColourContrast(state),
    setupKeySpacing(state),
    setupMinFreq(state),
    setupBaseFreq(state),
    setupMaxFreq(state),
    setupSustain(state)
  ]

  const sliderModels = state.slider
  const sliderViews = state.pageElt.sliders = {}
  const sliderControllerArray = state.controller.sliders = []
  for (const sliderModel of sliderModelTempArray) {
    const id = sliderModel.id
    if (id) {
      // Add slider model to central list
      sliderModels[id] = sliderModel

      // Get slider view elements and add to list
      const sliderView = sliderViews[id] = {}
      sliderViews[id].label = document.querySelector(`#label-${id}`)
      sliderViews[id].slider = document.querySelector(`#slider-${id}`)
      sliderViews[id].display = document.querySelector(`#display-${id}`)

      // Initialise the view elements (some of these not updated again)
      const sliderViewInput = sliderViews[id].slider
      sliderViewInput.min = sliderModel.min
      sliderViewInput.step = sliderModel.step
      sliderViewInput.max = sliderModel.max
      sliderViewInput.value = sliderModel.getValue()

      // Add a slider controller
      const sliderController = new SliderController({
        model: sliderModel,
        view: sliderView
      })
      sliderControllerArray.push(sliderController)

    }
  }
}

export default setupSliders
