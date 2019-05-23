import SliderController from '../controllers/SliderController'
import makeSliderArray from './makeSliderArray'

const setupSliders = state => {
  const sliderModels = state.slider
  const sliderViews = state.pageElt.sliders = {}
  state.controller.slider = {}
  for (const sliderModel of makeSliderArray(state)) {
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
      state.controller.slider[sliderModel.id] = new SliderController({
        model: sliderModel,
        view: sliderView
      })
    }
  }
}

export default setupSliders
