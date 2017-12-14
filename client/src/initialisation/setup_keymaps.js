import keyPositions from "../keymap/key_positions_en-gb_macbook_all.json"
import functionKeys from "../keymap/function_keys_all.json"

// Need a keymap specifically to wipe out previous transposing keymap info

import transposeReset from "../keymap/transposing/reset.json"
import transpose0 from "../keymap/transposing/3-limit_medium.json"
import transpose1 from "../keymap/transposing/5-limit_simple.json"
import transpose2 from "../keymap/transposing/5-limit_medium.json"
import transpose3 from "../keymap/transposing/7-limit_medium.json"
import transpose4 from "../keymap/transposing/13-limit_full.json"

const setupKeymaps = (state) => {

  const stateMap = state.map

  stateMap.main = keyPositions
  stateMap.functions = functionKeys
  stateMap.transposeReset = transposeReset

  stateMap.transposeSetups = [
    transpose0, transpose1, transpose2, transpose3, transpose4
  ]
  stateMap.transposeIndex = 2

}

export default setupKeymaps
