const setupRecording = (state) => {
  state.recording = {}
  const stateRec = state.recording
  stateRec.numArray = []
  stateRec.denomArray = []
  stateRec.nextIndex = 0
  console.log("Recording initialised")
}

export default setupRecording
