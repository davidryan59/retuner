import strokeStyleDefault from './stroke_style_default'

const strokeStyleBPM = (state, key) => {

  // DEBUG
  // For some reason, flashing is not in time with demo.
  // Why? Faulty frame rate somewhere? 50 rather than 60?
  // For now:
  return strokeStyleDefault(state, key)


  // const secondsPerBeat = 60 / (state.slider.bpm.current || 1)
  // const offset = state.slider.bpm.timeOffset || 0
  // const totalTime = state.control.timing.timeTotalS
  // const fraction = ((totalTime - offset) % secondsPerBeat) / secondsPerBeat
  // if (0.25 < fraction) {
  //   return strokeStyleDefault(state, key)
  // }
  // // Pulse in time with clock as per bpm value
  // return 'rgba(0, 0, 0, 1)'
}

export default strokeStyleBPM
