const cycleWaveform = (state, key) => {

  const stateWaveform = state.waveform
  const types = stateWaveform.types
  const index = stateWaveform.index
  const maxIndex = types.length
  const newIndex = (index + 1) % maxIndex
  const newType = stateWaveform.types[newIndex]
  stateWaveform.index = newIndex
  console.log("New waveform is", newType)

}

export default cycleWaveform
