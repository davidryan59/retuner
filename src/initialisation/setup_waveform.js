import setSustainAdsrFromSlider from '../models/sustain/set_sustain_adsr_from_slider'

const setupWaveform = (state) => {

  setSustainAdsrFromSlider(state)

  // 'waveformType' is the oscillator type
  // Standard values are "sine", "square", "sawtooth", "triangle"
  // and "custom". The default is "sine"
  // If using "custom", also need a PeriodicWave
  const waveformTypes = ["triangle", "square", "sawtooth", "sine"]
  const waveformIndex = 1

  // Save them into the state
  const stateWaveform = state.waveform
  stateWaveform.allTypes = waveformTypes
  stateWaveform.index = waveformIndex
  stateWaveform.getType = state => state.waveform.allTypes[state.waveform.index]
  console.log("Waveform initialised to", stateWaveform.getType(state), "with various parameters")
}

export default setupWaveform
