import stopNote from "../../audio/stop_note"

const digit6 = (state) => {
  const newFreq = state.originalFreq
  console.log(
    "Stopping note and resetting frequency to original value of",
    Math.round(newFreq*100)/100, "Hz"
  )
  stopNote(state)
  state.oscFreq = newFreq
}

export default digit6
