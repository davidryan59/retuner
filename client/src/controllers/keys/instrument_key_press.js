import keyEndsPreviousPress from "../../calculations/key_ends_previous_press"
import stopNote from "../audio/stop_note"
import isTransposing from "../../calculations/is_transposing"
import transposeInstrument from "../audio/transpose_instrument"
import playNote from "../audio/play_note"

const instrumentKeyPress = (state, key) => {

  // console.log("Pressing", key.keyboardCode)

  if (keyEndsPreviousPress(state, key)) {
    stopNote(state, key)
  }
  if (isTransposing(state, key)) {
    transposeInstrument(state, key)
    playNote(state, key)
  } else {
    const freqFactor = key.transposes.decimalRel
    playNote(state, key, freqFactor)
  }

}

export default instrumentKeyPress
