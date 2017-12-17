import Slider from '../../models/slider'

const setupSustain = (state) => {

  const slider = new Slider({
    id: "sustain",
    label: "Sustain",
    unit: "s",
    numLength: 4,
    initial: 3,
    min: 0.3,
    step: 0.1,
    max: 30
  })

  return slider

}

export default setupSustain
