import Slider from '../../models/slider'

const setupDecibels = (state) => {

  state.dB = new Slider({
    name: "Volume",
    unit: "dB",
    initial: 1,
    min: -21,
    step: 1,
    max: 11
  })

  console.log(`${state.dB}`)

  // SETUP NOTES
  // +11dB, -9dB
  // correspond to amplitudes of
  // 1, 0.1 respectively
  // (Can extend this on a log scale)
}

export default setupDecibels
