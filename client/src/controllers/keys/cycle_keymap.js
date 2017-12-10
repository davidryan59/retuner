import getKeymapIndex from '../../keymap/get_keymap_index'
import setKeymapIndex from '../../keymap/set_keymap_index'

const cycleKeymap = (state, key) => {
  let numericOption = getKeymapIndex(state)
  numericOption++                       // Modular cycling occurs on the set,
  setKeymapIndex(state, numericOption)  // so [max_value] -> 0
  const newName = state.map.currentName
  console.log(`Keymap is now ${newName}`)
}

export default cycleKeymap
