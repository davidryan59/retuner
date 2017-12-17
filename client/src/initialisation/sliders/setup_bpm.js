import Slider from '../../models/slider'

const setupBPM = (state) => {

  const slider = new Slider({
    name: "Speed",
    unit: "bpm",
    initial: state.param.startBPM,
    min: 30,
    step: 5,
    max: 500,
    logScale: true
  })

  state.slider.bpm = slider

  console.log(`${slider}`)
}

export default setupBPM
