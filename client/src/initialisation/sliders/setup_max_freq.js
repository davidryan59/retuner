import Slider from '../../models/slider'

const setupMaxFreq = (state) => {

  const slider = new Slider({
    id: "maxFreq",
    label: "Max",
    unit: "Hz",
    initial: state.param.currentMaxHz,
    max: state.param.maxMaxHz,
    step: 50,
    min: Math.round(state.param.baseFrequencyHz * 1.42),
    logScale: true
  })

  return slider

}

export default setupMaxFreq
