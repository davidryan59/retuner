import labelArrayDefault from './label_array_default'

const labelArrayDemoToggle = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const stateDemo = state.demo
  const playing = stateDemo.playing
  // if (playing) {
    const name = stateDemo.current.name || stateDemo.list[stateDemo.index].name
    if (name) {
      buttonTextArray.push(name)
    }
  // }
  const demoToggleLabel = (playing) ? "ON" : "OFF"
  buttonTextArray.push(demoToggleLabel)
  return buttonTextArray
}

export default labelArrayDemoToggle
