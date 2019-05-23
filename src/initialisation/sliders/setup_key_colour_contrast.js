import Slider from '../../models/slider'

const setupKeyColourContrast = (state) => {

  const slider = new Slider({
    id: "colourContrast",
    label: "Contrast",
    unit: "",
    initial: 10,
    min: -9,
    step: 1,
    max: 11
  })

  return slider

}

export default setupKeyColourContrast
