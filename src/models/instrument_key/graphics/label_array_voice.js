const labelArrayVoice = (state, key) => {
  const buttonTextArray = [key.symbol || key.keyboardCode]
  if (key.functionLabel) {
    buttonTextArray.push(key.functionLabel)
  }
  buttonTextArray.push(state.waveform.getType(state).toUpperCase())
  return buttonTextArray
}

export default labelArrayVoice
