import keyMap from "../keymap/keymap_en-gb_macbook_chrome.json"
console.log("Imported keymap into instrument key setup:", keyMap)

import InstrumentKey from '../models/instrument_key'

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
  // const keyMapFile = stateKey.file
  // const jsonKeyMapData = require("../../" + keyMapFile)
  // const keymap = JSON.parse(jsonKeyMapData)
  stateKey.map = keyMap.map

  // For each keymap entry, construct an InstrumentKey
  const keyMapKeyArray = Object.keys(stateKey.map)
  for (const key of keyMapKeyArray) {
    const instrumentKeySetup = stateKey.map[key]
    instrumentKeySetup.keyboardCode = key     // Add the key itself to the object!
    instrumentKeyArray.push(new InstrumentKey(state, instrumentKeySetup))
  }

  console.log("The instrument has been set up with", instrumentKeyArray.length, "keys")
}

export default setupInstrumentKeys
