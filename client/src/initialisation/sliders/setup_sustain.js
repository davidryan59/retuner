import Slider from '../../models/slider'

const setupSustain = (state) => {

  const slider = new Slider({
    name: "Sustain",
    unit: "s",
    initial: 3,
    min: 0.3,
    step: 0.1,
    max: 30
  })

  state.slider.sustain = slider

  console.log(`${slider}`)
}

export default setupSustain
