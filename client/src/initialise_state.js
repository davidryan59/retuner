const initialiseState = (state) => {
  // state starts as an empty object
  state.input = {}
  state.input.keyboard = {}

  state.oscFreq = 256
  console.log("State initialised to", state)
}

export default initialiseState
