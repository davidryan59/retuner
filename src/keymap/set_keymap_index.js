import setupTransposingKeys from './setup_transposing_keys'

const setKeymapIndex = (state, newIndex) => {

  // Check the new index
  const maxIndex = state.map.transposeSetups.length
  let checkedValue = parseInt(newIndex) //|| 0
  checkedValue = checkedValue % maxIndex

  // Set the new index, name
  state.map.transposeIndex = checkedValue
  const newMap = state.map.transposeSetups[checkedValue]
  state.map.currentName = newMap.name

  // Reinstall the keymap
  setupTransposingKeys(state)

}

export default setKeymapIndex
