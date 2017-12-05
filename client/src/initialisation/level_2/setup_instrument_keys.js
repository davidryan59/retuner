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
  state.key = {}
  const stateKey = state.key
  stateKey.lastPressed = null
  stateKey.lastMoused = null
  stateKey.indexOrderArray = []
  stateKey.array = []
  const keyArray = stateKey.array

  // Location x, y array are 'model coords' with roughly 10 units between keys
  keyArray.push(new InstrumentKey({
    keyboardCode: "",           // Function - doesn't trap key properly
    symbol: "FN",
    location: {x: 10, y: 10},
    type: "key_fails",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "ControlLeft",
    symbol: "CTRL-L",
    location: {x: 20, y: 10},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "AltLeft",
    symbol: "ALT-L",
    location: {x: 30, y: 10},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "MetaLeft",
    symbol: "APP-L",
    location: {x: 42, y: 10},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Space",
    symbol: "SPACE",
    type: "play_note",
    location: {x: 78, y: 12},
    fraction: {num: 1, denom: 1},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "MetaRight",
    symbol: "APP-R",
    location: {x: 105, y: 10},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "AltRight",
    symbol: "ALT-R",
    location: {x: 115, y: 10},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "ArrowLeft",
    symbol: "Left",
    location: {x: 126, y: 10},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "ArrowUp",
    symbol: "Up",
    location: {x: 135, y: 13},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "ArrowDown",
    symbol: "Down",
    location: {x: 135, y: 7},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "ArrowRight",
    symbol: "Right",
    location: {x: 144, y: 10},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "ShiftLeft",
    symbol: "SH-L",
    location: {x: 12, y: 20},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "IntlBackslash",
    symbol: "` ~",
    location: {x: 23, y: 20},
    type: "log_state",
    functionLabel: "Log State",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyZ",
    symbol: "Z",
    location: {x: 33, y: 20},
    type: "play_note",
    fraction: {num: 8, denom: 13},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyX",
    symbol: "X",
    location: {x: 43, y: 20},
    type: "play_note",
    fraction: {num: 8, denom: 11},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyC",
    symbol: "C",
    location: {x: 53, y: 20},
    type: "play_note",
    fraction: {num: 7, denom: 8},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyV",
    symbol: "V",
    location: {x: 63, y: 20},
    type: "play_note",
    fraction: {num: 8, denom: 9},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyB",
    symbol: "B",
    location: {x: 73, y: 20},
    type: "play_note",
    fraction: {num: 15, denom: 16},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyN",
    symbol: "N",
    location: {x: 83, y: 20},
    type: "play_note",
    fraction: {num: 16, denom: 15},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyM",
    symbol: "M",
    location: {x: 93, y: 20},
    type: "play_note",
    fraction: {num: 9, denom: 8},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Comma",
    symbol: ", <",
    location: {x: 103, y: 20},
    type: "play_note",
    fraction: {num: 8, denom: 7},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Period",
    symbol: ". >",
    location: {x: 113, y: 20},
    type: "play_note",
    fraction: {num: 11, denom: 8},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Slash",
    symbol: "/ ?",
    location: {x: 123, y: 20},
    type: "play_note",
    fraction: {num: 13, denom: 8},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "ShiftRight",
    symbol: "SH-R",
    location: {x: 143, y: 20},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "",          // CapsLock - doesn't trap key properly
    symbol: "CAPS",
    location: {x: 10, y: 28},
    type: "key_fails",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyA",
    symbol: "A",
    location: {x: 28, y: 30},
    type: "play_note",
    fraction: {num: 4, denom: 7},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyS",
    symbol: "S",
    location: {x: 38, y: 30},
    type: "play_note",
    fraction: {num: 7, denom: 9},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyD",
    symbol: "D",
    location: {x: 48, y: 30},
    type: "play_note",
    fraction: {num: 6, denom: 7},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyF",
    symbol: "F",
    location: {x: 58, y: 30},
    type: "play_note",
    fraction: {num: 5, denom: 6},
  }))


  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyG",
    symbol: "G",
    location: {x: 68, y: 30},
    type: "play_note",
    fraction: {num: 9, denom: 10},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyH",
    symbol: "H",
    location: {x: 78, y: 30},
    type: "cycle_waveform",
    functionLabel: "Voice",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyJ",
    symbol: "J",
    location: {x: 88, y: 30},
    type: "play_note",
    fraction: {num: 10, denom: 9},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyK",
    symbol: "K",
    location: {x: 98, y: 30},
    type: "play_note",
    fraction: {num: 6, denom: 5},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyL",
    symbol: "L",
    location: {x: 108, y: 30},
    type: "play_note",
    fraction: {num: 7, denom: 6},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Semicolon",
    symbol: "; :",
    location: {x: 118, y: 30},
    type: "play_note",
    fraction: {num: 9, denom: 7},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Quote",
    symbol: "' \"",
    location: {x: 128, y: 30},
    type: "play_note",
    fraction: {num: 7, denom: 4},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Backslash",
    symbol: "\\ |",
    location: {x: 138, y: 30},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "",      // Tab - doesn't trap key properly
    symbol: "TAB",
    location: {x: 10, y: 35},
    type: "key_fails",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyQ",
    symbol: "Q",
    location: {x: 25, y: 40},
    type: "play_note",
    fraction: {num: 1, denom: 2},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyW",
    symbol: "W",
    location: {x: 35, y: 40},
    type: "play_note",
    fraction: {num: 2, denom: 3},
  }))
  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyE",
    symbol: "E",
    location: {x: 45, y: 40},
    type: "play_note",
    fraction: {num: 3, denom: 4},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyR",
    symbol: "R",
    location: {x: 55, y: 40},
    type: "play_note",
    fraction: {num: 4, denom: 5},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyT",
    symbol: "T",
    location: {x: 65, y: 40},
    type: "play_note",
    fraction: {num: 5, denom: 8},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyY",
    symbol: "Y",
    location: {x: 75, y: 40},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyU",
    symbol: "U",
    location: {x: 85, y: 40},
    type: "not_used",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyI",
    symbol: "I",
    location: {x: 95, y: 40},
    type: "play_note",
    fraction: {num: 8, denom: 5},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyO",
    symbol: "O",
    location: {x: 105, y: 40},
    type: "play_note",
    fraction: {num: 5, denom: 4},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "KeyP",
    symbol: "P",
    location: {x: 115, y: 40},
    type: "play_note",
    fraction: {num: 4, denom: 3},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "BracketLeft",
    symbol: "[ {",
    location: {x: 125, y: 40},
    type: "play_note",
    fraction: {num: 3, denom: 2},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "BracketRight",
    symbol: "] }",
    location: {x: 135, y: 40},
    type: "play_note",
    fraction: {num: 2, denom: 1},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Enter",
    symbol: "ENTER",
    location: {x: 145, y: 38},
    type: "increase_volume",
    functionLabel: "Vol Up",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Backquote",
    symbol: "- +",
    location: {x: 10, y: 44},
    type: "decrease_volume",
    functionLabel: "Vol Down",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Digit1",
    symbol: "1",
    location: {x: 20, y: 48},
    type: "decrease_volume",
    functionLabel: "Vol Down",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Digit2",
    symbol: "2",
    location: {x: 30, y: 48.8},
    type: "play_note",
    fraction: {num: 8, denom: 15},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Digit3",
    symbol: "3",
    location: {x: 40, y: 49.5},
    type: "play_note",
    fraction: {num: 5, denom: 9},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Digit4",
    symbol: "4",
    location: {x: 50, y: 50},
    type: "play_note",
    fraction: {num: 9, denom: 16},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Digit5",
    symbol: "5",
    location: {x: 60, y: 50},
    type: "play_note",
    fraction: {num: 3, denom: 5},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Digit6",
    symbol: "6",
    location: {x: 70, y: 50},
    type: "cycle_sustain_options",
    functionLabel: "Sustain",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Digit7",
    symbol: "7",
    location: {x: 80, y: 50},
    type: "reset_central_freq",
    functionLabel: "Reset Freq",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Digit8",
    symbol: "8",
    location: {x: 90, y: 50},
    type: "toggle_transposing",
    functionLabel: "Transpose",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Digit9",
    symbol: "9",
    location: {x: 100, y: 50},
    type: "play_note",
    fraction: {num: 5, denom: 3},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Digit0",
    symbol: "0",
    location: {x: 110, y: 50},
    type: "play_note",
    fraction: {num: 16, denom: 9},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Minus",
    symbol: "- _",
    location: {x: 120, y: 50},
    type: "play_note",
    fraction: {num: 9, denom: 5},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Equal",
    symbol: "+ =",
    location: {x: 130, y: 50},
    type: "play_note",
    fraction: {num: 15, denom: 8},
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Backspace",
    symbol: "BACK",
    location: {x: 145, y: 50},
    type: "increase_volume",
    functionLabel: "Vol Up",
  }))

  keyArray.push(new InstrumentKey({
    keyboardCode: "Escape",
    symbol: "Esc",
    location: {x: 10, y: 52},
    type: "pause_app",
    functionLabel: "Pause",
  }))

  console.log("The instrument has been set up with", keyArray.length, "keys")
}

export default setupInstrumentKeys
