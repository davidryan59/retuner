import Slider from '../../models/slider'

const setupDecibels = (state) => {

  const slider = new Slider({
    id: "volume",
    label: "Volume",
    unit: "dB",
    initial: -6,
    min: -21,
    step: 1,
    max: 11
  })

  return slider

  // SETUP NOTES
  // +11dB, -9dB
  // correspond to amplitudes of
  // 1, 0.1 respectively
  // (Can extend this on a log scale)
}

export default setupDecibels
