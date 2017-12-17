import Slider from '../../models/slider'

const setupMaxFreq = (state) => {

  const slider = new Slider({
    name: "Max freq",
    unit: "Hz",
    initial: state.param.currentMaxHz,
    max: state.param.maxMaxHz,
    step: 10,
    min: state.param.baseFrequencyHz / 0.7,
    logScale: true
  })

  state.slider.maxFreq = slider

  console.log(`${slider}`)
}

export default setupMaxFreq