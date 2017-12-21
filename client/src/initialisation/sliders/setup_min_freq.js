import Slider from '../../models/slider'

const setupMinFreq = (state) => {

  const slider = new Slider({
    id: "minFreq",
    label: "Min",
    unit: "Hz",
    initial: state.param.currentMinHz,
    min: Math.round(state.param.minMinHz),
    max: Math.round(state.param.maxMaxHz / 4.5),
    logScale: true,
    points: 99
  })

  return slider

}

export default setupMinFreq
