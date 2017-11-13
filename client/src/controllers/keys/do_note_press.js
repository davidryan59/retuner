import calculateFreqFactor from '../audio/calculate_freq_factor'
import keyEndsPreviousPress from "../audio/key_ends_previous_press"
import stopNote from "../audio/stop_note"
import isTransposing from "../audio/is_transposing"
import transposeInstrument from "../audio/transpose_freqs"
import playNote from "../audio/play_note"

const doNotePress = (state, key) => {

  console.log("Pressing", key.keyboardCode)

  const freqFactor = calculateFreqFactor(state, key)
  if (keyEndsPreviousPress(state, key)) {
    stopNote(state, key)
  }
  if (isTransposing(state, key)) {
    transposeInstrument(state, freqFactor)
    playNote(state, key)
  } else {
    playNote(state, key, freqFactor)
  }

}

export default doNotePress
