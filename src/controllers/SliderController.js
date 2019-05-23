class SliderController {

  constructor(options) {
    if (!options) {
      options = {}
    }

    this.model = options.model
    this.view = options.view
    // The view has got a label, slider and display

    // Set up an event listener on the slider
    if (this.view.slider && this.model) {
      this.view.slider.addEventListener('input', e => this.updateModelFromView())
      // input listener works as slider is being moved.
      // change listener doesn't! So use input listener.
    }
  }
  
  updateModel(value) {
    this.model.setCurrent(value)
    // Do side effects, such as updating mixer gain
    if (this.model.onUpdate) this.model.onUpdate()
  }
  
  increaseSliderUnits(unitsToIncrease) {
    this.updateModel(this.model.current + unitsToIncrease * this.model.step)
  }

  updateModelFromView() {
    this.updateModel(parseFloat(this.view.slider.value))
  }

  updateViewFromModel() {
    if (this.model.redraw) {
      if (this.view.label) this.view.label.innerText = this.model.getLabelText()
      if (this.view.slider) this.view.slider.value = this.model.getLinearValue()
      if (this.view.display) this.view.display.innerText = this.model.getDisplayText()
      this.model.redraw = false
    }
  }
}

export default SliderController
