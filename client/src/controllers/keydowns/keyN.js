import transposeFreqs from "../transpose_freqs"

const keyN = (state) => {
  // Increase frequency by 5/4
  transposeFreqs(state, 5/4)
  console.log("Frequency increased by 5/4", state);
}

export default keyN
