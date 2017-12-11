import labelArrayDefault from './label_array_default'

const labelArrayDemoToggle = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const demoToggleLabel = (state.demo.playing) ? "ON" : "OFF"
  buttonTextArray.push(demoToggleLabel)
  return buttonTextArray
}

export default labelArrayDemoToggle
