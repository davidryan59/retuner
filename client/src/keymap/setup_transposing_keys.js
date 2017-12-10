import overwriteWithKeymapInfo from './overwrite_with_keymap_info'

const setupTransposingKeys = (state) => {

  // Clear previous transposing keys
  const keymapReset = state.map.transposeReset
  const mapReset = keymapReset.map
  overwriteWithKeymapInfo(state, mapReset, `reset`)

  // Install the current transposing keys
  const mapIndex = state.map.transposeIndex
  const keymapNotes = state.map.transposeSetups[mapIndex]
  const mapNotes = keymapNotes.map
  const name = keymapNotes.name  ||  "Transposing"
  state.map.currentName = name
  overwriteWithKeymapInfo(state, mapNotes, `keymap ${name}`)

}

export default setupTransposingKeys
