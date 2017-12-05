import InstrumentKey from '../../models/instrument_key'

import keymap from "../.././keymaps/en-gb_macbook_chrome.json"
// var jsonKeyMapData = require("../../" + "./keymaps/en-gb_macbook_chrome.json")
// console.log(keymap)

const setupInstrumentKeys = (state) => {

  const stateKey = state.key
  stateKey.lastPressed = null
  stateKey.lastMoused = null
  stateKey.indexOrderArray = []
  stateKey.array = []
  const keyArray = stateKey.array

  // Load the keymap
  // const keyMapFile = stateKey.file
  // const jsonKeyMapData = require("../../" + keyMapFile)
  // const jsKeyMapData = JSON.parse(jsonKeyMapData)
  stateKey.map = keymap.map

  // For each entry in the map, construct an InstrumentKey
  const keyMapKeyArray = Object.keys(stateKey.map)
  for (const key in keyMapKeyArray) {
    const keySetup = stateKey.map[key]
    // keyArray.push(new InstrumentKey(keySetup))
  }

  // console.dir(keyMapFile)
  // console.dir(jsonKeyMapData)
  // console.dir(jsKeyMapData)
  console.dir(stateKey.map)
  console.dir(keyArray)

  console.log("The instrument has been set up with", keyArray.length, "keys")
}

export default setupInstrumentKeys
