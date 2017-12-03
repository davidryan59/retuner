import InstrumentKey from '../../models/instrument_key'

// Each of these are called with (state, key) pair
// when the relevant key is pressed
import pauseApp from "../../controllers/keys/pause_app"
import logState from "../../controllers/keys/log_state"
import toggleTransposing from "../../controllers/keys/toggle_transposing"
import cycleSustainOptions from "../../controllers/keys/cycle_sustain_options"
import cycleWaveform from "../../controllers/keys/cycle_waveform"
import resetCentralFreq from "../../controllers/keys/reset_central_freq"
import volumeDecrease from "../../controllers/keys/volume_decrease"
import volumeIncrease from "../../controllers/keys/volume_increase"
import instrumentKeyPress from "../../controllers/keys/instrument_key_press"
import instrumentKeyRelease from "../../controllers/keys/instrument_key_release"
import playPrevNote from "../../controllers/keys/play_prev_note"
import playNextNote from "../../controllers/keys/play_next_note"

// This one will (re)calculate stats relevant to each key
// in particular the ones with frequency shifts which play notes
import initialiseKeys from "../level_3/initialise_keys"

const keyDoesNothing = (state, key)=>{
  // console.log("Key does nothing", key)
}

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
    keyboardCode: "",           // Function - doesn't trap key properly
    symbol: "FN",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 10, y: 10, r:3}
  })

  keyArray.push({
    keyboardCode: "ControlLeft",
    symbol: "CTRL-L",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 20, y: 10, r:5}
  })

  keyArray.push({
    keyboardCode: "AltLeft",
    symbol: "ALT-L",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 30, y: 10, r:5}
  })

  keyArray.push({
    keyboardCode: "MetaLeft",
    symbol: "APP-L",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 42, y: 10, r:5}
  })

  keyArray.push({
    keyboardCode: "Space",
    symbol: "SPACE",
    functionLabel: "",
    transposePrimes: [],       // 1/1
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 78, y: 12, r:12}
  })

  keyArray.push({
    keyboardCode: "MetaRight",
    symbol: "APP-R",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 105, y: 10, r:5}
  })

  keyArray.push({
    keyboardCode: "AltRight",
    symbol: "ALT-R",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 115, y: 10, r:5}
  })

  keyArray.push({
    keyboardCode: "ArrowLeft",
    symbol: "Left",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 126, y: 10, r:5}
  })

  keyArray.push({
    keyboardCode: "ArrowUp",
    symbol: "Up",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 135, y: 13, r:5}
  })

  keyArray.push({
    keyboardCode: "ArrowDown",
    symbol: "Down",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 135, y: 7, r:5}
  })

  keyArray.push({
    keyboardCode: "ArrowRight",
    symbol: "Right",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 144, y: 10, r:5}
  })

  keyArray.push({
    keyboardCode: "ShiftLeft",
    symbol: "SH-L",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 12, y: 20, r:5}
  })

  keyArray.push({
    keyboardCode: "IntlBackslash",
    symbol: "` ~",
    functionLabel: "Log State",
    runOnPress: logState,
    location: {x: 23, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyZ",
    symbol: "Z",
    functionLabel: "",
    transposePrimes: [[2, 3], [13, -1]],   // 8/13
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 33, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyX",
    symbol: "X",
    functionLabel: "",
    transposePrimes: [[2, 3], [11, -1]],   // 8/11
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 43, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyC",
    symbol: "C",
    functionLabel: "",
    transposePrimes: [[2, -3], [7, 1]],   // 7/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 53, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyV",
    symbol: "V",
    functionLabel: "",
    transposePrimes: [[2, 3], [3, -2]],       // 8/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 63, y: 20, r:10}
  })



  // console.log(new InstrumentKey({
  //   keyboardCode: "KeyV",
  //   symbol: "V",
  //   functionLabel: "",
  //   transposePrimes: [[2, 3], [3, -2]],       // 8/9
  //   runOnPress: instrumentKeyPress,
  //   runOnRelease: instrumentKeyRelease,
  //   location: {x: 63, y: 20, r:10}
  // }))



  keyArray.push({
    keyboardCode: "KeyB",
    symbol: "B",
    functionLabel: "",
    transposePrimes: [[2, -4], [3, 1], [5, 1]],   // 15/16
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 73, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyN",
    symbol: "N",
    functionLabel: "",
    transposePrimes: [[2, 4], [3, -1], [5, -1]],   // 16/15
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 83, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyM",
    symbol: "M",
    functionLabel: "",
    transposePrimes: [[2, -3], [3, 2]],   // 9/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 93, y: 20, r:10}
  })

  keyArray.push({
    keyboardCode: "Comma",
    symbol: ", <",
    functionLabel: "",
    transposePrimes: [[2, 3], [7, -1]],   // 8/7
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 103, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "Period",
    symbol: ". >",
    functionLabel: "",
    transposePrimes: [[2, -3], [11, 1]],   // 11/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 113, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "Slash",
    symbol: "/ ?",
    functionLabel: "",
    transposePrimes: [[2, -3], [13, 1]],   // 13/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 123, y: 20, r:7}
  })

  keyArray.push({
    keyboardCode: "ShiftRight",
    symbol: "SH-R",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 143, y: 20, r:5}
  })

  keyArray.push({
    keyboardCode: "",          // CapsLock - doesn't trap key properly
    symbol: "CAPS",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 10, y: 28, r:3}
  })

  keyArray.push({
    keyboardCode: "KeyA",
    symbol: "A",
    functionLabel: "",
    transposePrimes: [[2, 2], [7, -1]],   // 4/7
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 28, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyS",
    symbol: "S",
    functionLabel: "",
    transposePrimes: [[3, -2], [7, 1]],   // 7/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 38, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyD",
    symbol: "D",
    functionLabel: "",
    transposePrimes: [[2, 1], [3, 1], [7, -1]],   // 6/7
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 48, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyF",
    symbol: "F",
    functionLabel: "",
    transposePrimes: [[2, -1], [3, -1], [5, 1]],       // 5/6
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 58, y: 30, r:10}
  })


  keyArray.push({
    keyboardCode: "KeyG",
    symbol: "G",
    functionLabel: "",
    transposePrimes: [[2, -1], [3, 2], [5, -1]],       // 9/10
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 68, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyH",
    symbol: "H",
    functionLabel: "Voice",
    runOnPress: cycleWaveform,
    location: {x: 78, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyJ",
    symbol: "J",
    functionLabel: "",
    transposePrimes: [[2, 1], [3, -2], [5, 1]],       // 10/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 88, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyK",
    symbol: "K",
    functionLabel: "",
    transposePrimes: [[2, 1], [3, 1], [5, -1]],       // 6/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 98, y: 30, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyL",
    symbol: "L",
    functionLabel: "",
    transposePrimes: [[2, -1], [3, -1], [7, 1]],   // 7/6
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 108, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "Semicolon",
    symbol: "; :",
    functionLabel: "",
    transposePrimes: [[3, 2], [7, -1]],   // 9/7
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 118, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "Quote",
    symbol: "' \"",
    functionLabel: "",
    transposePrimes: [[2, -2], [7, 1]],   // 7/4
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 128, y: 30, r:7}
  })

  keyArray.push({
    keyboardCode: "Backslash",
    symbol: "\\ |",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 138, y: 30, r:5}
  })

  keyArray.push({
    keyboardCode: "",      // Tab - doesn't trap key properly
    symbol: "TAB",
    functionLabel: "",
    runOnPress: keyDoesNothing,
    location: {x: 10, y: 35, r:3}
  })

  keyArray.push({
    keyboardCode: "KeyQ",
    symbol: "Q",
    functionLabel: "",
    transposePrimes: [[2, -1]],       // 1/2
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 25, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyW",
    symbol: "W",
    functionLabel: "",
    transposePrimes: [[2, 1], [3, -1]],       // 2/3
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 35, y: 40, r:10}
  })
  keyArray.push({
    keyboardCode: "KeyE",
    symbol: "E",
    functionLabel: "",
    transposePrimes: [[2, -2], [3, 1]],       // 3/4
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 45, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyR",
    symbol: "R",
    functionLabel: "",
    transposePrimes: [[2, 2], [5, -1]],       // 4/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 55, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyT",
    symbol: "T",
    functionLabel: "",
    transposePrimes: [[2, -3], [5, 1]],       // 5/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 65, y: 40, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyY",
    symbol: "Y",
    functionLabel: "PREV N/N",
    runOnPress: playPrevNote,
    location: {x: 75, y: 40, r:5}
  })

  keyArray.push({
    keyboardCode: "KeyU",
    symbol: "U",
    functionLabel: "Next N/N",
    runOnPress: playNextNote,
    location: {x: 85, y: 40, r:5}
  })

  keyArray.push({
    keyboardCode: "KeyI",
    symbol: "I",
    functionLabel: "",
    transposePrimes: [[2, 3], [5, -1]],       // 8/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 95, y: 40, r:7}
  })

  keyArray.push({
    keyboardCode: "KeyO",
    symbol: "O",
    functionLabel: "",
    transposePrimes: [[2, -2], [5, 1]],       // 5/4
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 105, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "KeyP",
    symbol: "P",
    functionLabel: "",
    transposePrimes: [[2, 2], [3, -1]],       // 4/3
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 115, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "BracketLeft",
    symbol: "[ {",
    functionLabel: "",
    transposePrimes: [[2, -1], [3, 1]],       // 3/2
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 125, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "BracketRight",
    symbol: "] }",
    functionLabel: "",
    transposePrimes: [[2, 1]],       // 2/1
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 135, y: 40, r:10}
  })

  keyArray.push({
    keyboardCode: "Enter",
    symbol: "ENTER",
    functionLabel: "Vol Up",
    runOnPress: volumeIncrease,
    location: {x: 145, y: 38, r:10}
  })

  keyArray.push({
    keyboardCode: "Backquote",
    symbol: "- +",
    functionLabel: "Vol Down",
    runOnPress: volumeDecrease,
    location: {x: 10, y: 44, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit1",
    symbol: "1",
    functionLabel: "Vol Down",
    runOnPress: volumeDecrease,
    location: {x: 20, y: 48, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit2",
    symbol: "2",
    functionLabel: "",
    transposePrimes: [[2, 3], [3, -1], [5, -1]],       // 8/15
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 30, y: 48.8, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit3",
    symbol: "3",
    functionLabel: "",
    transposePrimes: [[3, -2], [5, 1]],       // 5/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 40, y: 49.5, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit4",
    symbol: "4",
    functionLabel: "",
    transposePrimes: [[2, -4], [3, 2]],       // 9/16
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 50, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit5",
    symbol: "5",
    functionLabel: "",
    transposePrimes: [[3, 1], [5, -1]],       // 3/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 60, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit6",
    symbol: "6",
    functionLabel: "Sustain",
    runOnPress: cycleSustainOptions,
    location: {x: 70, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit7",
    symbol: "7",
    functionLabel: "Reset Freq",
    runOnPress: resetCentralFreq,
    location: {x: 80, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit8",
    symbol: "8",
    functionLabel: "Transpose",
    runOnPress: toggleTransposing,
    location: {x: 90, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit9",
    symbol: "9",
    functionLabel: "",
    transposePrimes: [[3, -1], [5, 1]],       // 5/3
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 100, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Digit0",
    symbol: "0",
    functionLabel: "",
    transposePrimes: [[2, 4], [3, -2]],       // 16/9
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 110, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Minus",
    symbol: "- _",
    functionLabel: "",
    transposePrimes: [[3, 2], [5, -1]],       // 9/5
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 120, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Equal",
    symbol: "+ =",
    functionLabel: "",
    transposePrimes: [[2, -3], [3, 1], [5, 1]],       // 15/8
    runOnPress: instrumentKeyPress,
    runOnRelease: instrumentKeyRelease,
    location: {x: 130, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Backspace",
    symbol: "BACK",
    functionLabel: "Vol Up",
    runOnPress: volumeIncrease,
    location: {x: 145, y: 50, r:7}
  })

  keyArray.push({
    keyboardCode: "Escape",
    symbol: "Esc",
    functionLabel: "Pause",
    runOnPress: pauseApp,
    location: {x: 10, y: 52, r:9}
  })






  // In some of the keys above, prime numbers were specified
  // but the num and denom were not explicitly calculated.
  // Do that here.
  initialiseKeys(state)

  console.log("The instrument has been set up with", keyArray.length, "keys")
}

export default setupInstrumentKeys
