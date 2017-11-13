import stopNote from "../../audio/stop_note"

const digit6 = (state) => {
  const origFreq = state.freqs.originalFreq
  console.log(
    "Stopping note and resetting frequency to original value of",
    Math.round(origFreq*100)/100, "Hz"
  )
  stopNote(state)
  state.freqs.oscFreq = origFreq
}

export default digit6
