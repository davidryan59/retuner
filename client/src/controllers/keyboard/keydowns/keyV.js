import transposeFreqsThenPlayNote from "../../audio/transpose_then_play"

const keyV = (state) => {
  const transposeFactor = 4/5
  transposeFreqsThenPlayNote(state, transposeFactor)
}

export default keyV
