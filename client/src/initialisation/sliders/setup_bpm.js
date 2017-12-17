import Slider from '../../models/slider'

const setupBPM = (state) => {

  const slider = new Slider({
    name: "Speed",
    unit: "bpm",
    initial: state.param.startBPM,
    min: 40,
    step: 1,
    max: 300
  })

  state.slider.bpm = slider

  console.log(`${slider}`)
}

export default setupBPM
