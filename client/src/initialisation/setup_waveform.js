const setupWaveform = (state) => {
  // Specify the oscillator type
  // Standard values are "sine", "square", "sawtooth", "triangle"
  // and "custom". The default is "sine"
  // If using "custom", also need a PeriodicWave
  const waveform = "square"
  state.waveform = {}
  state.waveform.type = waveform
  console.log("Waveform initialised to", waveform)
}

export default setupWaveform
