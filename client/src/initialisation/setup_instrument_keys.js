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

const keyDoesNothing = (state, key)=>{console.log("Key does nothing", key)}

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

  keyArray.push({
    keyboardCode: "Function",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "ControlLeft",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "AltLeft",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "MetaLeft",
    runOnPress: keyDoesNothing,
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
    keyboardCode: "MetaRight",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "AltRight",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "ArrowLeft",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "ArrowUp",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "ArrowDown",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "ArrowRight",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "ShiftLeft",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "IntlBackslash",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyZ",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyX",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyC",
    runOnPress: volumeDecrease,
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
    keyboardCode: "KeyB",
    transposePrimes: [[2, -4], [3, 1], [5, 1]],   // 15/16
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyN",
    transposePrimes: [[2, 4], [3, -1], [5, -1]],   // 16/15
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
    keyboardCode: "Comma",
    runOnPress: volumeIncrease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Period",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Slash",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "ShiftRight",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "CapsLock",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyA",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyS",
    runOnPress: logState,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyD",
    runOnPress: keyDoesNothing,
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
    keyboardCode: "KeyG",
    transposePrimes: [[2, -1], [3, 2], [5, -1]],       // 9/10
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyH",
    runOnPress: cycleWaveform,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyJ",
    transposePrimes: [[2, 1], [3, -2], [5, 1]],       // 10/9
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
    keyboardCode: "KeyL",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Semicolon",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Quote",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Backslash",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Tab",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyQ",
    transposePrimes: [[2, -1]],       // 1/2
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
    keyboardCode: "KeyE",
    transposePrimes: [[2, -2], [3, 1]],       // 3/4
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
    keyboardCode: "KeyT",
    transposePrimes: [[2, -3], [5, 1]],       // 5/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })



  keyArray.push({
    keyboardCode: "KeyY",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyU",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "KeyI",
    transposePrimes: [[2, 3], [5, -1]],       // 8/5
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
    keyboardCode: "Enter",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Backquote",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Digit1",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Digit2",
    transposePrimes: [[2, 3], [3, -1], [5, -1]],       // 8/15
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Digit3",
    transposePrimes: [[3, -2], [5, 1]],       // 5/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Digit4",
    transposePrimes: [[2, -4], [3, 2]],       // 9/16
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Digit5",
    transposePrimes: [[3, 1], [5, -1]],       // 3/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Digit6",
    runOnPress: cycleSustainOptions,
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
    keyboardCode: "Digit9",
    transposePrimes: [[3, -1], [5, 1]],       // 5/3
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Digit0",
    transposePrimes: [[2, 4], [3, -2]],       // 16/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Minus",
    transposePrimes: [[3, 2], [5, -1]],       // 9/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Equal",
    transposePrimes: [[2, -3], [3, 1], [5, 1]],       // 15/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })

  keyArray.push({
    keyboardCode: "Backspace",
    runOnPress: keyDoesNothing,
    canvas: {x: 0, y: 0, w: 80, h: 60, r: 10, col: 0}
  })







  // In some of the keys above, prime numbers were specified
  // but the num and denom were not explicitly calculated.
  // Do that here.
  recalculateAllKeyStats(state)

  console.log("The instrument has been set up with", keyArray.length, "keys")
}

export default setupInstrumentKeys
