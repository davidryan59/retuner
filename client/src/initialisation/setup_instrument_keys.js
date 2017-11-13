// Each of these are called with (state, key) pair
// when the relevant key is pressed

import logState from "../controllers/keys/log_state"
import toggleTransposing from "../controllers/keys/toggle_transposing"
import cycleSustainOptions from "../controllers/keys/cycle_sustain_options"
import resetToOriginalFreq from "../controllers/keys/reset_to_original_freq"
import volumeDecrease from "../controllers/keys/volume_decrease"
import volumeIncrease from "../controllers/keys/volume_increase"
import doNotePress from "../controllers/keys/do_note_press"
import doNoteRelease from "../controllers/keys/do_note_release"

const setupInstrumentKeys = (state) => {
  // The musical instrument has 'keys'
  // Each 'key' interacts in at least 3 different ways:
  // - It can be run from a keyboard press
  // - It can be run from a mouse click
  // - It runs a function on pressing it
  // - It runs a function on releasing it
  // - It displays to a specific part of the canvas in a button-like format

  // Make somewhere to store the instrument keys
  state.keys = []
  const keyArray = state.keys

  // Note that the canvas attributes below are placeholders...
  // want to put in some real dimensions and parameters
  // when drawing to the screen

  // Set up (initial) instrument keys

  keyArray.push({
    keyboardCode: "KeyS",
    runOnPress: logState,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Digit7",
    runOnPress: resetToOriginalFreq,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Digit8",
    runOnPress: toggleTransposing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Digit6",
    runOnPress: cycleSustainOptions,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyC",
    runOnPress: volumeDecrease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Comma",
    runOnPress: volumeIncrease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Space",
    transposes: {num: 1, denom: 1},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyM",
    transposes: {num: 9, denom: 8},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyK",
    transposes: {num: 6, denom: 5},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyO",
    transposes: {num: 5, denom: 4},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyP",
    transposes: {num: 4, denom: 3},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "BracketLeft",
    transposes: {num: 3, denom: 2},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "BracketRight",
    transposes: {num: 2, denom: 1},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyV",
    transposes: {num: 8, denom: 9},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyF",
    transposes: {num: 5, denom: 6},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyR",
    transposes: {num: 4, denom: 5},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyE",
    transposes: {num: 3, denom: 4},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyW",
    transposes: {num: 2, denom: 3},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyQ",
    transposes: {num: 1, denom: 2},
    runOnPress: doNotePress,
    runOnRelease: doNoteRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  console.log("The instrument has been set up with", keyArray.length, "keys")
}

export default setupInstrumentKeys
