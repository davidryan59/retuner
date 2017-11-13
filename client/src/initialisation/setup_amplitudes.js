const setupAmplitudes = (state) => {
  // Specify the gain node amplitudes
  // 0.001 is very very quiet, 1 is very loud (maximum amplitude)
  // If multiple notes are played, 1 will cause distortion,
  // so might want to restrict to say 0.23 or 0.25 per note.

  // Setup some default parameters
  const minAmp = 0.003
  const initialAmp = 0.08
  const maxAmp = 0.23
  const ampChangeFactor = 1.0592537  // This produces step changes of exactly 0.5 dB
  // Assign them into state
  state.amps = {}
  const stateAmps = state.amps
  stateAmps.minAmp = minAmp
  stateAmps.initialAmp = initialAmp
  stateAmps.currentAmp = initialAmp
  stateAmps.maxAmp = maxAmp
  stateAmps.ampChangeFactor = ampChangeFactor
  console.log("Amplitudes initialised. Min", minAmp, "initially", initialAmp, "max", maxAmp)
}

export default setupAmplitudes
