import Slider from '../../models/slider'
import decibelToAmplitude from "../../calculations/decibel_to_amplitude"

const setupDecibels = (state) => {
  
  const onUpdate = () => {
    // Setup the gain node amplitude target
    const newAmp = decibelToAmplitude(state.slider.volume.getValue())
    const smallDelay = 0.01  //s
    state.mixer.gain.setTargetAtTime(newAmp, state.context.audio.currentTime, smallDelay)
  }

  const slider = new Slider({
    id: "volume",
    label: "Volume",
    unit: "dB",
    initial: -6,
    min: -21,
    step: 1,
    max: 11,
    onUpdate
  })

  return slider

  // SETUP NOTES
  // +11dB, -9dB
  // correspond to amplitudes of
  // 1, 0.1 respectively
  // (Can extend this on a log scale)
}

export default setupDecibels
