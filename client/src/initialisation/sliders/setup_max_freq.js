import Slider from '../../models/slider'

const setupMaxFreq = (state) => {

  const slider = new Slider({
    id: "maxFreq",
    label: "Max",
    unit: "Hz",
    initial: state.param.currentMaxHz,
    min: Math.round(state.param.minMinHz * 2),
    max: Math.round(state.param.maxMaxHz),
    logScale: true,
    points: 1 + 240 * Math.log2(state.param.maxMaxHz / (2 * state.param.minMinHz))
  })

  return slider

}

export default setupMaxFreq
