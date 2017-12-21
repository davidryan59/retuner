import decibelToAmplitude from "../../calculations/decibel_to_amplitude"

const playNote = (state, key, extraFreqFactor=1) => {
  // Extra frequency factor used in some cases,
  // e.g. if transposition is switched off

  // Retrieve relevant state objects
  const audioContext = state.context.audio
  const waveform = state.waveform
  const stateFreq = state.freq
  const adsrPress = state.waveform.adsrOnPressNote

  // Create oscillator and gain nodes, and connect them to audio context
  const nodeOscillator = audioContext.createOscillator();
  const nodeGainADSR = audioContext.createGain();
  const nodeGainVolControl = audioContext.createGain();
  nodeOscillator.connect(nodeGainADSR)
  nodeGainADSR.connect(nodeGainVolControl)
  nodeGainVolControl.connect(audioContext.destination)

  // Specify the oscillator frequency and type
  const currentTime = audioContext.currentTime
  const baseFreqHz = state.slider.baseFreq.getValue()
  const instrumentCentralFreqDecimalRel = stateFreq.decimalCentreCurrent
  const noteFreqHz = baseFreqHz * instrumentCentralFreqDecimalRel * extraFreqFactor
  nodeOscillator.frequency.setValueAtTime(noteFreqHz, currentTime)
  nodeOscillator.type = waveform.getType(state)

  // Setup the gain node amplitude target
  const newAmp = decibelToAmplitude(state.slider.volume.getValue())
  const smallDelay = 0.01  //s
  nodeGainVolControl.gain.setTargetAtTime(newAmp, audioContext.currentTime, smallDelay)

  // Apply the ADSR envelope
  adsrPress.applyTo(nodeGainADSR.gain, currentTime)

  // Play the note for duration of ADSR
  nodeOscillator.start(currentTime)
  nodeOscillator.stop(currentTime + adsrPress.duration)

  if (key) {
    key.currentOscNode = nodeOscillator
    key.currentAdsrGainNode = nodeGainADSR
    console.log("New note stored on", key.keyboardCode)
    const theFreqText = noteFreqHz.toFixed(2)
    console.log("Playing note", key.transposes.textFraction, "at", theFreqText, "Hz")
    nodeOscillator.onended = (key) => {
      console.log("Note at", theFreqText, "Hz ended")
      key.currentOscNode = null
      key.currentAdsrGainNote = null
    }
  } else {
    console.log("*** Note storage FAILED ***")
  }

}

export default playNote
