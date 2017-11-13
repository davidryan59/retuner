const initialiseState = (state) => {
  // state starts as an empty object
  state.input = {}
  state.input.keyboard = {}

  state.originalFreq = 256      // Hz
  state.oscFreq = state.originalFreq
  console.log("State initialised to", state)
}

export default initialiseState
