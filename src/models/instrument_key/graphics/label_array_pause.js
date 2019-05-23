import labelArrayDefault from './label_array_default'

const labelArrayPause = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const pauseLabel = (state.control.mainLoopPaused) ? "ON" : "OFF"
  buttonTextArray.push(pauseLabel)
  return buttonTextArray
}

export default labelArrayPause
