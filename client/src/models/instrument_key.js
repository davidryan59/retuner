import keyTypeInfo from "../keymap/key_types.json"
console.log("Imported key types into InstrumentKey model:", keyTypeInfo)

import setupGeneralInstrumentKey from "./setup/general_instrument_key"
import setupNotePlayingInstrumentKey from "./setup/note_playing_instrument_key"

import freqToRGBA from "../calculations/freq_to_rgba"

class InstrumentKey {
  constructor(state, specifiedOptions) {

    // Make sure specifiedOptions is an object
    if (!specifiedOptions) {
      specifiedOptions = {}
    }

    // Overwrite specifiedOptions with anything from typeOptions
    const type = specifiedOptions.type  || ""
    const typeOptions = keyTypeInfo[type]
    const allOptions = Object.assign(specifiedOptions, typeOptions)

    // Setup object structure

    this.coords = {}
    const theCoords = this.coords

    theCoords.canvas = {}
    const theCanvas = theCoords.canvas
    theCanvas.x = 0
    theCanvas.y = 0
    theCanvas.r = 0

    theCoords.model = {}
    const modelCoords = theCoords.model

    modelCoords.force = {}
    const theForce = modelCoords.force
    theForce.neighbours = []
    theForce.x = 0
    theForce.y = 0

    modelCoords.anchor = {}
    const anchorCoords = modelCoords.anchor

    modelCoords.current = {}
    const currentCoords = modelCoords.current

    // Setup instance variables from allOptions
    this.keyboardCode = allOptions.keyboardCode      || ""
    this.symbol = allOptions.symbol                  || ""
    this.functionLabel = allOptions.functionLabel    || ""
    const location = allOptions.location
    const incrementRadius = allOptions.incrementRadius || 0
    if (location) {
      // Will interact with other keys and draw to canvas
      this.physicsSwitchedOn = true
      // Set its position
      anchorCoords.x = currentCoords.x = location.x
      anchorCoords.y = currentCoords.y = location.y
      // Start radius as slightly randomised, due to sorting on r later
      anchorCoords.r = currentCoords.r = 6.5 + incrementRadius + 0.01 * Math.random()
      currentCoords.extraR = 1
    }

    // Count number of times this key is pressed
    this.countPresses = 0

    // Run type-based setup
    if (type === "play_note") {
      setupNotePlayingInstrumentKey(state, this, allOptions)
    } else {
      setupGeneralInstrumentKey(state, this, allOptions)
    }
  }

  // toString() {
  //   return `Not yet implemented`
  // }

  // aMethod(input) {
  //   return 42 + input
  // }
}

export default InstrumentKey
