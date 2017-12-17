import Slider from '../../models/slider'

const setupBaseFreq = (state) => {

  const slider = new Slider({
    id: "baseFreq",
    name: "C4",
    unit: "Hz",
    initial: state.param.baseFrequencyHz,
    min: 254,
    step: 0.1,
    max: 270
  })

  // state.slider.baseFreq = slider
  //
  // console.log(`${slider}`)

  return slider
}

export default setupBaseFreq
