import Slider from '../../models/slider'

const setupMaxFreq = (state) => {

  const slider = new Slider({
    id: "maxFreq",
    label: "Max",
    unit: "Hz",
    initial: state.param.currentMaxHz,
    min: Math.round(state.param.minMinHz * 4.5),
    max: Math.round(state.param.maxMaxHz),
    logScale: true,
    points: 99
  })

  return slider

}

export default setupMaxFreq
