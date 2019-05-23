import getKeymapIndex from '../../keymap/getKeymapIndex'
import setKeymapIndex from '../../keymap/setKeymapIndex'

const cycleKeymap = (state, key) => {
  let numericOption = getKeymapIndex(state)
  numericOption++                       // Modular cycling occurs on the set,
  setKeymapIndex(state, numericOption)  // so [max_value] -> 0
  const newName = state.map.currentName
  console.log(`Keymap is now ${newName}`)
}

export default cycleKeymap
