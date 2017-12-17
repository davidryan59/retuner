import Slider from '../../models/slider'

const setupBPM = (state) => {

  const slider = new Slider({
    id: "bpm",
    name: "Speed",
    unit: "bpm",
    initial: state.param.startBPM,
    min: 30,
    step: 5,
    max: 500,
    logScale: true
  })

  // state.slider.bpm = slider
  //
  // console.log(`${slider}`)

  return slider
}

export default setupBPM
