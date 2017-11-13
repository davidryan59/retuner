const changeAmplitude = (state, unitsToIncrease) => {
  // Increase the amplitude of the overall system
  // by (factor ** units)
  // Normally units is +1 or -1
  // The recommended volume unit is 0.5 dB which is around 1.06
  // which is set in the state.

  // Get the relevant state object
  const stateAmps = state.amps
  // Retrieve relevant state variables
  const minAmp = stateAmps.minAmp
  const currentAmp = stateAmps.currentAmp
  const maxAmp = stateAmps.maxAmp
  const ampChangeFactor = stateAmps.ampChangeFactor
  // Make a new volume, bounded
  let newAmp = currentAmp * (ampChangeFactor ** unitsToIncrease)
  if (newAmp < minAmp) {
    newAmp = minAmp
  }
  if (maxAmp < newAmp) {
    newAmp = maxAmp
  }
  // Do the change
  stateAmps.currentAmp = newAmp
  console.log(
    "Amplitude changed from", Math.round(currentAmp*1000)/1000,
    "to", Math.round(newAmp*1000)/1000
  )
}

export default changeAmplitude
