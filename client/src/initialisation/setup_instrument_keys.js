// import keyMap from "../keymap/keymap_en-gb_macbook_chrome.json"
import mapKeyPositions from "../keymap/key_positions_en-gb_macbook.json"
console.log("Imported keymap into instrument key setup:", mapKeyPositions)
import mapFunctionKeys from "../keymap/function_keys.json"
// import mapTransposingKeys from "../keymap/transposing_3-limit_simple_pythag.json"
import mapTransposingKeys from "../keymap/transposing_5-limit_simple.json"

import InstrumentKey from '../models/instrument_key'
import overwriteWithKeymapInfo from '../keymap/overwrite_with_keymap_info'

const setupInstrumentKeys = (state) => {

  const stateKey = state.key
  stateKey.tempPressed = null
  stateKey.tempMoused = null
  stateKey.indexOrderArray = []
  stateKey.array = []
  const instrumentKeyArray = stateKey.array

  // // Load the keymap
  // // (Note - it doesn't seem possible to have a variable file name yet...
  // // so for other browsers, computers or locales they will have to load
  // // the default keymap. Hopefully find a way to over-ride that later...)
  // const mapKeyPositionsFile = stateKey.file
  // const jsonKeyMapData = require("../../" + mapKeyPositionsFile)
  // const keymap = JSON.parse(jsonKeyMapData)
  const mainMap = mapKeyPositions.map
  stateKey.mainMap = mainMap

  // For each keymap entry, construct an InstrumentKey
  for (const key of Object.keys(mainMap)) {
    const instrumentKeySetup = mainMap[key]
    instrumentKeySetup.keyboardCode = key     // Add the key itself to the object!
    const newInstrumentKey = new InstrumentKey(state, instrumentKeySetup)
    instrumentKeyArray.push(newInstrumentKey)
    mainMap[key].instrumentKey = newInstrumentKey
  }
  console.log("The instrument has been set up with", instrumentKeyArray.length, "blank keys")

  overwriteWithKeymapInfo(state, mapFunctionKeys, "function keys")
  overwriteWithKeymapInfo(state, mapTransposingKeys, "transposing keys")

}

export default setupInstrumentKeys
