export const strokeStyleBPM = (state, key) => {
  // DEBUG
  // For some reason, flashing is not in time with demo.
  // Why? Faulty frame rate somewhere? 50 rather than 60?
  // For now:
  return strokeStyleDefault(state, key)

  // const secondsPerBeat = 60 / (state.slider.bpm.getValue() || 1)
  // const offset = state.slider.bpm.timeOffset || 0
  // const totalTime = state.control.timing.timeTotalS
  // const fraction = ((totalTime - offset) % secondsPerBeat) / secondsPerBeat
  // if (0.25 < fraction) {
  //   return strokeStyleDefault(state, key)
  // }
  // // Pulse in time with clock as per bpm value
  // return 'rgba(0, 0, 0, 1)'
}


export const strokeStyleDefault = (state, key) => {
  if (key.keyState) {
    return 'rgba(255, 255, 255, 0.6)'
  } else {
    return 'rgba(0, 0, 0, 0.55)'
  }
}


export const strokeStyleHighlight = (state, key) => {
  if (key.keyState) {
    return 'rgba(128, 128, 0, 1)'
  } else {
    return 'rgba(255, 255, 0, 1)'
  }
}


export const strokeStyleTransposing = (state, key) => {
  if (key.keyState) {
    const id = key._id
    if (state.key.tempPressed && id === state.key.tempPressed._id) {
      return 'rgba(20, 190, 20, 0.9)'
    } else if (state.key.tempMoused && id === state.key.tempMoused._id) {
      return 'rgba(200, 200, 0, 0.9)'
    } else {
      return 'rgba(170, 20, 20, 0.9)'
    }
  } else {
    return 'rgba(20, 20, 120, 0.7)'
  }
}
