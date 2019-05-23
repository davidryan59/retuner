import Slider from '../../models/slider'

const setupKeySpacing = (state) => {

  const slider = new Slider({
    id: "keySize",
    label: "Size",
    unit: "",
    initial: 10,
    min: 0,
    step: 1,
    max: 11
  })

  return slider
}

export default setupKeySpacing
