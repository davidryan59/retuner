import stopNote from "../audio/stop_note"
import transposingSuspended from "../audio/transposing_suspended"
import transposeInstrument from "../audio/transpose_freqs"
import playNote from "../audio/play_note"

const doNotePress = (state, key) => {

  // console.log("Running a note key")

  // stopNote(state, key)
  if (!transposingSuspended(state, key)) {
    transposeInstrument(state, key)
  }
  playNote(state, key)

}

export default doNotePress
