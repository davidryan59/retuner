// import ADSREnvelope from "adsr-envelope"

import setSustainAdsrFromSlider from '../models/sustain/set_sustain_adsr_from_slider'

const setupWaveform = (state) => {

  // ADSR - see ADSR envelope module
  // https://github.com/mohayonao/adsr-envelope/blob/master/README.md

  // // ORIGINAL
  // const adsrOnPressNote = new ADSREnvelope({
  //   attackTime: 0.02,
  //   decayTime: 0.20,
  //   sustainLevel: 0.70,  // Drop of approx 3dB from peak to sustain
  //   gateTime: 0.40,      // This is attack + decay + sustain time
  //   releaseTime: 2.00,
  //   releaseCurve: "exp"
  // })

  // const adsrOnPressNote = new ADSREnvelope({
  //   attackTime: 0.02,
  //   decayTime: 0.15,
  //   sustainLevel: 0.70,  // Drop of approx 3dB from peak to sustain
  //   gateTime: 0.27,      // This is attack + decay + sustain time
  //   releaseTime: 3,
  //   releaseCurve: "exp"
  // })

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
