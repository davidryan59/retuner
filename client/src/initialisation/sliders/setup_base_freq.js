import Slider from '../../models/slider'

const setupBaseFreq = (state) => {

  const slider = new Slider({
    id: "baseFreq",
    label: "C4",
    unit: "Hz",
    initial: state.param.baseFrequencyHz,
    min: Math.round(state.param.minMinHz * 2.12),
    max: Math.round(state.param.maxMaxHz / 2.12),
    logScale: true,
    points: 99
  })

  return slider
}

export default setupBaseFreq
