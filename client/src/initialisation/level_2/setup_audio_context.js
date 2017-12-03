const setupAudioContext = (state) => {
  // Create web audio api context
  const AudioContext = window.AudioContext || window.webkitAudioContext
  state.context.audio = new AudioContext()
  console.log("Audio context initialised")
}

export default setupAudioContext
