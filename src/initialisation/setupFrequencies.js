import Peo from 'peo'

const setupFrequencies = state => {
  const currentBaseHz = state.slider.baseFreq.getValue()
  const currentMaxHz = state.slider.maxFreq.getValue()
  const currentMinHz = state.slider.minFreq.getValue()

  const transposing = true             // false disables transposing every key press
  const keyReleaseEndsNote = false     // false means keys are sustained
  const keyEndsPreviousPress = false   // false means one key can generate multiple tones

  const stateFreq = state.freq
  stateFreq.decimalCentreMin = currentMinHz / currentBaseHz
  stateFreq.decimalCentreMax = currentMaxHz / currentBaseHz
  stateFreq.transposing = transposing
  stateFreq.keyReleaseEndsNote = keyReleaseEndsNote
  stateFreq.keyEndsPreviousPress = keyEndsPreviousPress

  stateFreq.decimalCentreCurrent = 1
  stateFreq.peoCentre = new Peo(1)    // Controls relative multiple of base frequency 
  stateFreq.peoBase = new Peo(1)      // Controls note name of base frequency

  console.log("Frequencies initialised")
}

export default setupFrequencies
