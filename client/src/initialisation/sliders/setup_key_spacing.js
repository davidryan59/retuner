import Slider from '../../models/slider'

const setupKeySpacing = (state) => {

  const slider = new Slider({
    id: "keySize",
    name: "Button size",
    unit: "",
    initial: 10,
    min: 0,
    step: 1,
    max: 11
  })

  // state.slider.keySize = slider
  //
  // console.log(`${slider}`)

  return slider
}

export default setupKeySpacing
