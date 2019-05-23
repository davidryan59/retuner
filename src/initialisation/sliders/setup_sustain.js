import Slider from '../../models/slider'

const setupSustain = (state) => {

  const slider = new Slider({
    id: "sustain",
    label: "Sustain",
    unit: "",
    numLength: 2,
    initial: 6,
    min: 0,
    step: 1,
    max: 11
  })

  return slider

}

export default setupSustain
