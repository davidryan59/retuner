import Slider from '../../models/slider'

const setupMinFreq = (state) => {

  const slider = new Slider({
    id: "minFreq",
    label: "Min",
    unit: "Hz",
    initial: state.param.currentMinHz,
    min: state.param.minMinHz,
    step: 3,
    max: Math.round(state.param.baseFrequencyHz * 0.7),
    logScale: true
  })

  return slider

}

export default setupMinFreq
