import transposeFreqs from "./transpose_freqs"
import stopNote from "./stop_note"
import playNote from "./play_note"

const transposeFreqsThenPlayNote = (state, transposeFactor) => {
  console.log("Transposing notes by factor of", Math.round(transposeFactor*100)/100, "then stopping and playing note")
  transposeFreqs(state, transposeFactor)
  stopNote(state)
  playNote(state, 1)
}

export default transposeFreqsThenPlayNote
