// Each of these are called with (state, key) pair
// when the relevant key is pressed
import pauseApp from "../controllers/keys/pause_app"
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

  keyArray.push({
    keyboardCode: "Function",
    runOnPress: keyDoesNothing,
    location: {x: 10, y: 10, r:7}
  })

  keyArray.push({
    keyboardCode: "ControlLeft",
    runOnPress: keyDoesNothing,
    location: {x: 20, y: 10, r:7}
  })

  keyArray.push({
    keyboardCode: "AltLeft",
    runOnPress: keyDoesNothing,
    location: {x: 30, y: 10, r:7}
  })

  keyArray.push({
    keyboardCode: "MetaLeft",
    runOnPress: keyDoesNothing,
    location: {x: 42, y: 10, r:8}
  })

  keyArray.push({
    keyboardCode: "Space",
    transposePrimes: [],       // 1/1
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 78, y: 12, r:12}
  })

  keyArray.push({
    keyboardCode: "MetaRight",
    runOnPress: keyDoesNothing,
    location: {x: 105, y: 10, r:8}
  })

  keyArray.push({
    keyboardCode: "AltRight",
    runOnPress: keyDoesNothing,
    location: {x: 115, y: 10, r:7}
  })

  keyArray.push({
    keyboardCode: "ArrowLeft",
    runOnPress: keyDoesNothing,
    location: {x: 126, y: 10, r:7}
  })

  keyArray.push({
    keyboardCode: "ArrowUp",
    runOnPress: keyDoesNothing,
    location: {x: 135, y: 13, r:6}
  })

  keyArray.push({
    keyboardCode: "ArrowDown",
    runOnPress: keyDoesNothing,
    location: {x: 135, y: 7, r:6}
  })

  keyArray.push({
    keyboardCode: "ArrowRight",
    runOnPress: keyDoesNothing,
    location: {x: 144, y: 10, r:7}
  })

  keyArray.push({
    keyboardCode: "ShiftLeft",
    runOnPress: keyDoesNothing,
    location: {x: 12, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "IntlBackslash",
    runOnPress: logState,
    location: {x: 23, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyZ",
    transposePrimes: [[2, 3], [13, -1]],   // 8/13
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 33, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyX",
    transposePrimes: [[2, 3], [11, -1]],   // 8/11
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 43, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyC",
    transposePrimes: [[2, -3], [7, 1]],   // 7/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 53, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyV",
    transposePrimes: [[2, 3], [3, -2]],       // 8/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 63, y: 20, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyB",
    transposePrimes: [[2, -4], [3, 1], [5, 1]],   // 15/16
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 73, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyN",
    transposePrimes: [[2, 4], [3, -1], [5, -1]],   // 16/15
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 83, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyM",
    transposePrimes: [[2, -3], [3, 2]],   // 9/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 93, y: 20, r:10}
  })

  keyArray.push({
    keyboardCode: "Comma",
    transposePrimes: [[2, 3], [7, -1]],   // 8/7
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 103, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "Period",
    transposePrimes: [[2, -3], [11, 1]],   // 11/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 113, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "Slash",
    transposePrimes: [[2, -3], [13, 1]],   // 13/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 123, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "ShiftRight",
    runOnPress: keyDoesNothing,
    location: {x: 143, y: 20, r:10}
  })

  keyArray.push({
    keyboardCode: "CapsLock",
    runOnPress: keyDoesNothing,
    location: {x: 15, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyA",
    transposePrimes: [[2, 2], [7, -1]],   // 4/7
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 28, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyS",
    transposePrimes: [[3, -2], [7, 1]],   // 7/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 38, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyD",
    transposePrimes: [[2, 1], [3, 1], [7, -1]],   // 6/7
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 48, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyF",
    transposePrimes: [[2, -1], [3, -1], [5, 1]],       // 5/6
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 58, y: 30, r:10}
  })


  keyArray.push({
    keyboardCode: "KeyG",
    transposePrimes: [[2, -1], [3, 2], [5, -1]],       // 9/10
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 68, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyH",
    runOnPress: cycleWaveform,
    location: {x: 78, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyJ",
    transposePrimes: [[2, 1], [3, -2], [5, 1]],       // 10/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 88, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyK",
    transposePrimes: [[2, 1], [3, 1], [5, -1]],       // 6/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 98, y: 30, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyL",
    transposePrimes: [[2, -1], [3, -1], [7, 1]],   // 7/6
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 108, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "Semicolon",
    transposePrimes: [[3, 2], [7, -1]],   // 9/7
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 118, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "Quote",
    transposePrimes: [[2, -2], [7, 1]],   // 7/4
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 128, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "Backslash",
    runOnPress: keyDoesNothing,
    location: {x: 138, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "Tab",
    runOnPress: keyDoesNothing,
    location: {x: 13, y: 40, r:8}
  })

  keyArray.push({
    keyboardCode: "KeyQ",
    transposePrimes: [[2, -1]],       // 1/2
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 25, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyW",
    transposePrimes: [[2, 1], [3, -1]],       // 2/3
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 35, y: 40, r:10}
  })
  keyArray.push({
    keyboardCode: "KeyE",
    transposePrimes: [[2, -2], [3, 1]],       // 3/4
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 45, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyR",
    transposePrimes: [[2, 2], [5, -1]],       // 4/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 55, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyT",
    transposePrimes: [[2, -3], [5, 1]],       // 5/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 65, y: 40, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyY",
    runOnPress: keyDoesNothing,
    location: {x: 75, y: 40, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyU",
    runOnPress: keyDoesNothing,
    location: {x: 85, y: 40, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyI",
    transposePrimes: [[2, 3], [5, -1]],       // 8/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 95, y: 40, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyO",
    transposePrimes: [[2, -2], [5, 1]],       // 5/4
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 105, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyP",
    transposePrimes: [[2, 2], [3, -1]],       // 4/3
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 115, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "BracketLeft",
    transposePrimes: [[2, -1], [3, 1]],       // 3/2
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 125, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "BracketRight",
    transposePrimes: [[2, 1]],       // 2/1
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 135, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "Enter",
    runOnPress: volumeIncrease,
    location: {x: 145, y: 38, r:10}
  })

  keyArray.push({
    keyboardCode: "Backquote",
    runOnPress: volumeDecrease,
    location: {x: 10, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit1",
    runOnPress: volumeDecrease,
    location: {x: 20, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit2",
    transposePrimes: [[2, 3], [3, -1], [5, -1]],       // 8/15
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 30, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit3",
    transposePrimes: [[3, -2], [5, 1]],       // 5/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 40, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit4",
    transposePrimes: [[2, -4], [3, 2]],       // 9/16
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 50, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit5",
    transposePrimes: [[3, 1], [5, -1]],       // 3/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 60, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit6",
    runOnPress: cycleSustainOptions,
    location: {x: 70, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit7",
    runOnPress: resetToOriginalFreq,
    location: {x: 80, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit8",
    runOnPress: toggleTransposing,
    location: {x: 90, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit9",
    transposePrimes: [[3, -1], [5, 1]],       // 5/3
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 100, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit0",
    transposePrimes: [[2, 4], [3, -2]],       // 16/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 110, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Minus",
    transposePrimes: [[3, 2], [5, -1]],       // 9/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 120, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Equal",
    transposePrimes: [[2, -3], [3, 1], [5, 1]],       // 15/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 130, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Backspace",
    runOnPress: volumeIncrease,
    location: {x: 145, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Escape",
    runOnPress: pauseApp,
    location: {x: 10, y: 60, r:9}
  })






  // In some of the keys above, prime numbers were specified
  // but the num and denom were not explicitly calculated.
  // Do that here.
  recalculateAllKeyStats(state)

  console.log("The instrument has been set up with", keyArray.length, "keys")
}

export default setupInstrumentKeys
