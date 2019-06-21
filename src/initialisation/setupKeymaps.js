// Keymaps for basic setup, on different browsers
import keysCommon from '../keymap/setup/keysCommon.json'
import keysOption1Default from '../keymap/setup/keysOption1Default.json'
import keysOption1Safari from '../keymap/setup/keysOption1Safari.json'
import keysOption2Default from '../keymap/setup/keysOption2Default.json'
import keysOption2Firefox from '../keymap/setup/keysOption2Firefox.json'
import keysUnused from '../keymap/setup/keysUnused.json'

// Keymap to overwrite specific functions onto some keys
import keysFunctions from '../keymap/setup/keysFunctions.json'

// Keymap to clear the transposing keys
import transposeReset from "../keymap/transposing/reset.json"

// Keymaps to set transposing keys to different options
import transpose0 from "../keymap/transposing/3-limitMedium.json"
import transpose1 from "../keymap/transposing/5-limitSimple.json"
import transpose2 from "../keymap/transposing/5-limitMedium.json"
import transpose2a from "../keymap/transposing/5-limitFull.json"
import transpose3 from "../keymap/transposing/7-limitMedium.json"
import transpose4 from "../keymap/transposing/13-limitFull.json"
import transpose5 from "../keymap/transposing/diamond5-9.json"
import transpose6 from "../keymap/transposing/diamond6-11.json"


const setupKeymaps = state => {
  const browser = state.browser.type
  const stateMap = state.map

  // Keymaps to do with all key positions and some browser dependent key mappings
  stateMap.setupArray = []
  const setupArray = stateMap.setupArray
  setupArray.push(keysCommon)
  ;(browser === "Safari") ? setupArray.push(keysOption1Safari) : setupArray.push(keysOption1Default)
  ;(browser === "Firefox") ? setupArray.push(keysOption2Firefox) : setupArray.push(keysOption2Default)
  setupArray.push(keysUnused)
  console.dir(setupArray)

  // Transfer info out of setupArray and into a single mainMap
  stateMap.main = {map:{}}
  const mainMap = stateMap.main.map
  for (const importedKeymap of setupArray) {
    const thisMap = importedKeymap.map
    for (const key of Object.keys(thisMap)) {
      mainMap[key] = thisMap[key]
    }
    // IMPROVE: use an Object.assign here
  }

  // Keymap to overwrite some functions onto some keys
  stateMap.functions = keysFunctions

  // Keymap to reset transposing keys
  stateMap.transposeReset = transposeReset

  // Keymap to set transposing keys to various options
  stateMap.transposeSetups = [
    transpose0, transpose1, transpose2, transpose2a,
    transpose3, transpose4, transpose5,
    transpose6
  ]
  stateMap.transposeIndex = 3

  console.log(`Keymaps imported`)
}

export default setupKeymaps
