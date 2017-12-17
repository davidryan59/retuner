import Slider from '../../models/slider'

const setupBPM = (state) => {

  const slider = new Slider({
    id: "bpm",
    label: "Speed",
    unit: "bpm",
    initial: state.param.startBPM,
    min: 30,
    step: 5,
    max: 500,
    logScale: true
  })

  return slider
}

export default setupBPM
