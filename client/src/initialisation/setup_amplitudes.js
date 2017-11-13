const setupAmplitudes = (state) => {
  // Specify the gain node amplitudes
  // 0.001 is very very quiet, 1 is very loud (maximum amplitude)
  // If multiple notes are played, 1 will cause distortion,
  // so might want to restrict to say 0.23 or 0.25 per note.

  // Set up the amplitudes
  const initialAmp = 0.08
  const minAmp = 0.003
  const maxAmp = 0.23
  const volChangeFactor = 1.0592537  // This produces step changes of exactly 0.5 dB
  // Assign them into state
  state.amps = {}
  state.amps.initialAmp = initialAmp
  state.amps.minAmp = minAmp
  state.amps.maxAmp = maxAmp
  state.amps.volChangeFactor = volChangeFactor
  console.log("Amplitudes initialised. Min", minAmp, "initial", initialAmp, "max", maxAmp)
}

export default setupAmplitudes
