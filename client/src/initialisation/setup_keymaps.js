import keyPositions from "../keymap/key_positions_en-gb_macbook.json"
import functionKeys from "../keymap/function_keys.json"

// Need a keymap specifically to wipe out previous transposing keymap info

import transposeReset from "../keymap/transposing/reset.json"
import transpose1 from "../keymap/transposing/3-limit_medium.json"
import transpose2 from "../keymap/transposing/5-limit_simple.json"
import transpose3 from "../keymap/transposing/5-limit_medium.json"
import transpose4 from "../keymap/transposing/7-limit_medium.json"
import transpose5 from "../keymap/transposing/13-limit_full.json"

const setupKeymaps = (state) => {

  const stateMap = state.map

  stateMap.main = keyPositions
  stateMap.functions = functionKeys
  stateMap.transposeReset = transposeReset

  stateMap.transposeSetups = [
    transpose1, transpose2, transpose3, transpose4, transpose5
  ]
  stateMap.transposeIndex = 0    // Default keys will be 5-limit medium

}

export default setupKeymaps
