const setupMixer = state => {
  state.mixer = state.context.audio.createGain()
  state.mixer.connect(state.context.audio.destination)
  console.log("Mixer initialised")
}

export default setupMixer
