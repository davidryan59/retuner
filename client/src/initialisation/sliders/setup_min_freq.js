import Slider from '../../models/slider'

const setupMinFreq = (state) => {

  const slider = new Slider({
    name: "Min freq",
    unit: "Hz",
    initial: state.param.currentMinHz,
    min: state.param.minMinHz,
    step: 1,
    max: state.param.baseFrequencyHz * 0.7,
    logScale: true
  })

  state.slider.minFreq = slider

  console.log(`${slider}`)
}

export default setupMinFreq
