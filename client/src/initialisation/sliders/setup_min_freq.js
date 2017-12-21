import Slider from '../../models/slider'

const setupMinFreq = (state) => {

  const slider = new Slider({
    id: "minFreq",
    label: "Min",
    unit: "Hz",
    initial: state.param.currentMinHz,
    min: Math.round(state.param.minMinHz),
    max: Math.round(state.param.maxMaxHz / 2),
    logScale: true,
    points: 1 + 12 * Math.log2(state.param.maxMaxHz / (2 * state.param.minMinHz))
  })

  return slider

}

export default setupMinFreq
