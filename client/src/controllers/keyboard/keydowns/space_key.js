import transposeFreqsThenPlayNote from "../../audio/transpose_then_play"

const spaceKey = (state) => {
  console.log("SPACE - replaying note")
  const transposeFactor = 1
  transposeFreqsThenPlayNote(state, transposeFactor)
}

export default spaceKey
