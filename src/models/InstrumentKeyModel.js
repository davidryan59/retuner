import setupGeneralKey from "./instrumentKey/setup/setupGeneralKey"
import setupTransposingKey from "./instrumentKey/setup/setupTransposingKey"

import keyTypes from "../keymap/keyTypes.json"
console.log("Imported key types into InstrumentKeyModel:", keyTypes)

const defaultType = "not_used"
const transposingType = "play_note"


class InstrumentKeyModel {
  constructor(state, specifiedOptions) {
    this.state = state
    this.initialiseObjectStructure()
    this.initialiseBasicVariables()
    this.initialiseCoordsToZero()
    this.setup(specifiedOptions)
  }

  initialiseObjectStructure() {
    this.transposes = null
    // Transposing keys are a subtype.
    // key.transposes is setup there.
    this.activation = {}
    this.graphics = {}
    this.coords = {}
    const theCoords = this.coords
    theCoords.model = {}
    theCoords.canvas = {}
    const modelCoords = theCoords.model
    modelCoords.anchor = {}
    modelCoords.current = {}
    modelCoords.force = {}
    const theForce = modelCoords.force
    theForce.neighbours = []
  }

  initialiseBasicVariables() {
    this._id = Math.round(1e12 + 9e12 * Math.random())
    this.activation.count = 0
  }

  initialiseCoordsToZero() {
    const theCoords = this.coords
    const theCanvas = theCoords.canvas
    const modelCoords = theCoords.model
    const anchorCoords = modelCoords.anchor
    const currentCoords = modelCoords.current
    const theForce = modelCoords.force
    anchorCoords.x = currentCoords.x = theCanvas.x = 0
    anchorCoords.y = currentCoords.y = theCanvas.y = 0
    anchorCoords.r = currentCoords.r = theCanvas.r = 5
    currentCoords.extraR = 1
    theForce.x = 0
    theForce.y = 0
  }

  setup(specifiedOptions) {

    // Make sure specifiedOptions is available an objec
    if (!specifiedOptions) {
      specifiedOptions = {}
    }

    // Overwrite specifiedOptions with anything from typeOptions
    this.type = specifiedOptions.type || this.type || defaultType
    const typeOptions = keyTypes[this.type]
    const allOptions = Object.assign(specifiedOptions, typeOptions)

    // Setup instance variables from allOptions
    // (Keep existing values if new values not supplied)
    this.keyboardCode = allOptions.keyboardCode || this.keyboardCode || ""
    this.symbol = allOptions.symbol || this.symbol || ""
    this.functionLabel = allOptions.functionLabel || this.functionLabel || ""

    const modelCoords = this.coords.model
    const anchorCoords = modelCoords.anchor
    const currentCoords = modelCoords.current

    // Radius setup (changes if type changed)
    const incrementRadius = allOptions.incrementRadius || 0
    anchorCoords.r = currentCoords.r = 5.5 + incrementRadius + 0.1 * Math.random()

    // x, y setup (if keys reset, don't need to supply x, y)
    const location = allOptions.location
    if (location) {
      anchorCoords.x = currentCoords.x = location.x + 0.1 * Math.random()
      anchorCoords.y = currentCoords.y = location.y + 0.1 * Math.random()
      // Start radius as slightly randomised, due to sorting on r later
    }

    // Rest of setup depends on what type of key
    if (this.type === transposingType) {
      const fraction = allOptions.fraction
      setupTransposingKey(this.state, this, fraction.num, fraction.denom)
    } else {
      setupGeneralKey(this.state, this)
    }
  }

  toString() {
    if (this.graphics) {
      if (this.graphics.getLabelArray) {
        const labelArray = this.graphics.getLabelArray(this.state, this)
        return `Instrument Key ${labelArray[0]} ${labelArray[1]}`
      }
    }
    return `Instrument Key for ${this.symbol || this.keyboardCode}`
  }

}

export default InstrumentKeyModel
