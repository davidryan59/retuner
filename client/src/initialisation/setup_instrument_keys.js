// Each of these are called with (state, key) pair
// when the relevant key is pressed
import logState from "../controllers/keys/log_state"
import toggleTransposing from "../controllers/keys/toggle_transposing"
import cycleSustainOptions from "../controllers/keys/cycle_sustain_options"
import cycleWaveform from "../controllers/keys/cycle_waveform"
import resetToOriginalFreq from "../controllers/keys/reset_to_original_freq"
import volumeDecrease from "../controllers/keys/volume_decrease"
import volumeIncrease from "../controllers/keys/volume_increase"
import instrumentKeyPress from "../controllers/keys/instrument_key_press"
import instrumentKeyRelease from "../controllers/keys/instrument_key_release"

// This one will (re)calculate stats relevant to each key
// in particular the ones with frequency shifts which play notes
import recalculateAllKeyStats from "../calculations/recalculate_all_key_stats"

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
    keyboardCode: "KeyH",
    runOnPress: cycleWaveform,
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
    transposePrimes: [],       // 1/1
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyM",
    transposePrimes: [[2, -3], [3, 2]],   // 9/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyK",
    transposePrimes: [[2, 1], [3, 1], [5, -1]],       // 6/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyO",
    transposePrimes: [[2, -2], [5, 1]],       // 5/4
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyP",
    transposePrimes: [[2, 2], [3, -1]],       // 4/3
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "BracketLeft",
    transposePrimes: [[2, -1], [3, 1]],       // 3/2
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "BracketRight",
    transposePrimes: [[2, 1]],       // 2/1
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyV",
    transposePrimes: [[2, 3], [3, -2]],       // 8/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyF",
    transposePrimes: [[2, -1], [3, -1], [5, 1]],       // 5/6
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyR",
    transposePrimes: [[2, 2], [5, -1]],       // 4/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyE",
    transposePrimes: [[2, -2], [3, 1]],       // 3/4
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyW",
    transposePrimes: [[2, 1], [3, -1]],       // 2/3
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyQ",
    transposePrimes: [[2, -1]],       // 1/2
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  // In some of the keys above, prime numbers were specified
  // but the num and denom were not explicitly calculated.
  // Do that here.
  recalculateAllKeyStats(state)

  console.log("The instrument has been set up with", keyArray.length, "keys")
}

export default setupInstrumentKeys
