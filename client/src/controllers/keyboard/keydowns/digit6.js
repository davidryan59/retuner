import stopNote from "../../audio/stop_note"

const digit6 = (state) => {
  const stateFreqs = state.freqs
  const origFreq = stateFreqs.originalFreq
  console.log(
    "Stopping note and resetting frequency to original value of",
    Math.round(origFreq*100)/100, "Hz"
  )
  stopNote(state)
  stateFreqs.currentFreq = origFreq
}

export default digit6
