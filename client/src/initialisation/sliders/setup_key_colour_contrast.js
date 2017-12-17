import Slider from '../../models/slider'

const setupKeyColourContrast = (state) => {

  const slider = new Slider({
    name: "Contrast",
    unit: "",
    initial: 10,
    min: -9,
    step: 1,
    max: 11
  })

  state.slider.colourContrast = slider

  console.log(`${slider}`)
}

export default setupKeyColourContrast