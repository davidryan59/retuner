import ADSREnvelope from "adsr-envelope"

const setupWaveform = (state) => {

  // Set up some parameters here

  // Naming of this set as per ADSR envelope module
  // https://github.com/mohayonao/adsr-envelope/blob/master/README.md
  const attackTime = 0.02
  const decayTime = 0.20
  const sustainLevel = 0.70  // Drop of approx 3dB from peak to sustain
  const gateTime = 0.40      // This is attack + decay + sustain time
  const releaseTime = 2.00
  const releaseCurve = "exp"

  const adsr = new ADSREnvelope({
    attackTime: attackTime,
    decayTime: decayTime,
    sustainLevel: sustainLevel,
    gateTime: gateTime,
    releaseTime: releaseTime,
    releaseCurve: releaseCurve
  })

  // 'waveformType' is the oscillator type
  // Standard values are "sine", "square", "sawtooth", "triangle"
  // and "custom". The default is "sine"
  // If using "custom", also need a PeriodicWave
  const waveformTypes = ["triangle", "square", "sawtooth", "sine"]
  const waveformIndex = 1

  // Save them into the state
  state.waveform = {}
  const stateWaveform = state.waveform
  stateWaveform.adsrOnPlayNote = adsr
  stateWaveform.adsrOnStopNote = null        // TO BE IMPLEMENTED
  // stateWaveform.attackTime = attackTime
  // stateWaveform.decayTime = decayTime
  // stateWaveform.sustainTime = sustainTime
  // stateWaveform.releaseTime = releaseTime
  // stateWaveform.peakLevel = peakLevel
  // stateWaveform.sustainLevel = sustainLevel
  stateWaveform.types = waveformTypes
  stateWaveform.index = waveformIndex
  stateWaveform.type = state => state.waveform.types[state.waveform.index]
  console.log("Waveform initialised to", stateWaveform.type(state), "with various parameters")
}

export default setupWaveform
