const setupWaveform = (state) => {

  // Set up some parameters here

  // Naming of this set as per ADSR envelope module
  // https://github.com/mohayonao/adsr-envelope/blob/master/README.md
  const attackTime = 0.01
  const decayTime = 0.3
  const sustainTime = 1       // In future, leave this out and make on keyup!
  const releaseTime = 0.5
  const peakLevel = 1
  const sustainLevel = 0.708  // Drop of 3dB from peak to sustain
  // Could also use exponential release curve? Defaults are linear.

  // 'waveformType' is the oscillator type
  // Standard values are "sine", "square", "sawtooth", "triangle"
  // and "custom". The default is "sine"
  // If using "custom", also need a PeriodicWave
  const waveformType = "square"

  // Save them into the state
  state.waveform = {}
  const stateWaveform = state.waveform
  stateWaveform.attackTime = attackTime
  stateWaveform.decayTime = decayTime
  stateWaveform.sustainTime = sustainTime
  stateWaveform.releaseTime = releaseTime
  stateWaveform.peakLevel = peakLevel
  stateWaveform.sustainLevel = sustainLevel
  stateWaveform.type = waveformType
  console.log("Waveform initialised to", waveformType, "with various parameters")
}

export default setupWaveform
