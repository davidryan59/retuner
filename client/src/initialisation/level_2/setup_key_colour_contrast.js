import Slider from '../../models/slider'

const setupKeyColourContrast = (state) => {

  state.keyColourContrast = new Slider({
    name: "Contrast",
    unit: "",
    initial: 10,
    min: -9,
    step: 1,
    max: 11
  })

  console.log(`${state.keyColourContrast}`)
}

export default setupKeyColourContrast
