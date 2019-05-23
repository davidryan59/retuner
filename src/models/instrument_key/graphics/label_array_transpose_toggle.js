import labelArrayDefault from './label_array_default'

const labelArrayTransposeToggle = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const transposeToggleLabel = (state.freq.transposing) ? "ON" : "OFF"
  buttonTextArray.push(transposeToggleLabel)
  return buttonTextArray
}

export default labelArrayTransposeToggle
