const updateSliderModelFromView = (model, view) => {
  model.setCurrent(parseFloat(view.value))
}

const volumeSliderHandler = (state, event) => {
  updateSliderModelFromView(
    state.slider.volume,
    state.pageElt.sliders.volume.slider
  )
}

const bpmSliderHandler = (state, event) => {
  updateSliderModelFromView(
    state.slider.bpm,
    state.pageElt.sliders.bpm.slider
  )
}

const spacingSliderHandler = (state, event) => {
  updateSliderModelFromView(
    state.slider.keySize,
    state.pageElt.sliders.keySize.slider
  )
}

const contrastSliderHandler = (state, event) => {
  updateSliderModelFromView(
    state.slider.colourContrast,
    state.pageElt.sliders.colourContrast.slider
  )
}


export {volumeSliderHandler, bpmSliderHandler, spacingSliderHandler, contrastSliderHandler}
