import Slider from '../../models/slider'

const setupSustain = (state) => {

  const slider = new Slider({
    id: "sustain",
    label: "Sustain",
    unit: "s/10",
    numLength: 3,
    initial: 30,
    min: 3,
    step: 2,
    max: 300,
    logScale: true
  })

  return slider

}

export default setupSustain
