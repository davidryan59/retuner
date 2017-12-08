import Slider from '../models/slider'

const setupKeySpacing = (state) => {

  const slider = new Slider({
    name: "Button size",
    unit: "",
    initial: 10,
    min: 0,
    step: 1,
    max: 11
  })

  state.slider.keySize = slider

  console.log(`${slider}`)
}

export default setupKeySpacing
