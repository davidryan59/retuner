const setupAudioContext = (state) => {
  // Create web audio api context
  const AudioContext = window.AudioContext || window.webkitAudioContext
  state.audioContext = new AudioContext()
  console.log("Audio context initialised")
}

export default setupAudioContext
