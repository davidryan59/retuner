const labelArrayDefault = (state, key) => {
  const buttonTextArray = [key.symbol || key.keyboardCode]
  if (key.functionLabel) {
    buttonTextArray.push(key.functionLabel)
  }
  return buttonTextArray
}

export default labelArrayDefault
