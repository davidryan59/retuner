const labelArrayTransposing = (state, key) => {
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

export default labelArrayTransposing
