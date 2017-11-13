import transposeFreqsThenPlayNote from "../../audio/transpose_then_play"

const keyN = (state) => {
  const transposeFactor = 3/2
  transposeFreqsThenPlayNote(state, transposeFactor)
}

export default keyN
