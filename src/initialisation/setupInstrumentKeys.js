import InstrumentKeyModel from '../models/InstrumentKeyModel'
import overwriteWithKeymapInfo from '../keymap/overwriteWithKeymapInfo'
import setupTransposingKeys from '../keymap/setupTransposingKeys'

const setupInstrumentKeys = state => {
  const stateKey = state.key
  stateKey.tempPressed = null
  stateKey.tempMoused = null
  stateKey.indexOrderArray = []
  stateKey.array = []
  const instrumentKeyArray = stateKey.array

  // For the main keymap, construct instrument keys
  const mainMap = state.map.main.map
  console.log(mainMap)
  for (const key of Object.keys(mainMap)) {
    const instrumentKeySetup = mainMap[key]
    instrumentKeySetup.keyboardCode = key     // Add the key itself to the object!
    const newInstrumentKey = new InstrumentKeyModel(state, instrumentKeySetup)
    instrumentKeyArray.push(newInstrumentKey)
    mainMap[key].instrumentKey = newInstrumentKey
  }
  console.log("The instrument has been set up with", instrumentKeyArray.length, "keys")

  const functionKeys = state.map.functions.map
  overwriteWithKeymapInfo(state, functionKeys, "function keys")

  // This will set up the keys for the first time
  setupTransposingKeys(state)
  // When changing the keymap,
  // use 'setKeymapIndex' which will then
  // call this method again.

}

export default setupInstrumentKeys
