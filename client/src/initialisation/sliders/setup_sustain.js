import Slider from '../../models/slider'

const setupSustain = (state) => {

  const slider = new Slider({
    id: "sustain",
    name: "Sustain",
    unit: "s",
    numLength: 4,
    initial: 3,
    min: 0.3,
    step: 0.1,
    max: 30
  })

  // state.slider.sustain = slider

  // console.log(`${slider}`)

  return slider

}

export default setupSustain
