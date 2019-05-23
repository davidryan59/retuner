import getSustainTextLabel from '../../sustain/getSustainTextLabel'


export const labelArrayDefault = (state, key) => {
  const buttonTextArray = [key.symbol || key.keyboardCode]
  if (key.functionLabel) {
    buttonTextArray.push(key.functionLabel)
  }
  return buttonTextArray
}


export const labelArrayDemoToggle = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const stateDemo = state.demo
  const playing = stateDemo.playing
  const name = stateDemo.list[stateDemo.index].name
  if (name) {
    buttonTextArray.push(name)
  }
  const demoToggleLabel = (playing) ? "ON" : "OFF"
  buttonTextArray.push(demoToggleLabel)
  return buttonTextArray
}


export const labelArrayKeymap = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const keymapLabel = state.map.currentName
  buttonTextArray.push(keymapLabel)
  return buttonTextArray
}


export const labelArrayPause = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const pauseLabel = (state.control.mainLoopPaused) ? "ON" : "OFF"
  buttonTextArray.push(pauseLabel)
  return buttonTextArray
}


export const labelArraySustain = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const sustainLabel = getSustainTextLabel(state, key)
  buttonTextArray.push(sustainLabel)
  return buttonTextArray
}


export const labelArrayTransposeToggle = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const transposeToggleLabel = (state.freq.transposing) ? "ON" : "OFF"
  buttonTextArray.push(transposeToggleLabel)
  return buttonTextArray
}


export const labelArrayTransposing = (state, key) => {
  const buttonTextArray = [key.symbol || key.keyboardCode]
  const freq = key.transposes.getNextFreqAbsHz(state, key)
  if (key.activation.allowed(state, key)) {
    const freqText = freq.toFixed(2) + "Hz"
    buttonTextArray.push(freqText)
    buttonTextArray.push(key.transposes.textFract)
    buttonTextArray.push(key.transposes.textNotation)
  }
  buttonTextArray.push("\u00d7 " + key.transposes.textFraction) // Multiplication symbol
  return buttonTextArray
}


export const labelArrayVoice = (state, key) => {
  const buttonTextArray = [key.symbol || key.keyboardCode]
  if (key.functionLabel) {
    buttonTextArray.push(key.functionLabel)
  }
  buttonTextArray.push(state.waveform.getType(state).toUpperCase())
  return buttonTextArray
}
