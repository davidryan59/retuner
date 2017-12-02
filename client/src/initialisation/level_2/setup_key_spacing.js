import Slider from '../../models/slider'

const setupKeySpacing = (state) => {

  state.keySpacing = new Slider({
    name: "Button size",
    unit: "",
    initial: 10,
    min: 0,
    step: 1,
    max: 11
  })

  console.log(`${state.keySpacing}`)
}

export default setupKeySpacing
