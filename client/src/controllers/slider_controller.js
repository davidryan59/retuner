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
      this.view.slider.addEventListener('input', e => this.updateModel())
      // input listener works as slider is being moved.
      // change listener doesn't! So use input listener.
    }

  }

  updateModel() {
    this.model.setCurrent(parseFloat(this.view.slider.value))
    if (this.model.onUpdate) this.model.onUpdate()
  }

  updateView() {
    if (this.model.redraw) {
      if (this.view.label) this.view.label.innerText = this.model.getLabelText()
      if (this.view.slider) this.view.slider.value = this.model.getLinearValue()
      if (this.view.display) this.view.display.innerText = this.model.getDisplayText()
      this.model.redraw = false
    }
  }

}

export default SliderController
