import ADSREnvelope from "adsr-envelope"
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
  // const baseFreqHz = state.param.baseFrequencyHz
  const baseFreqHz = state.slider.baseFreq.getValue()
  const instrumentCentralFreqDecimalRel = stateFreq.decimalCentreCurrent
  const noteFreqHz = baseFreqHz * instrumentCentralFreqDecimalRel * extraFreqFactor
  nodeOscillator.frequency.setValueAtTime(noteFreqHz, currentTime)
  nodeOscillator.type = waveform.getType(state)

  // Setup the gain node amplitude
  nodeGainVolControl.gain.value = decibelToAmplitude(state.slider.volume.getValue())

  // Apply the ADSR envelope
  adsrPress.applyTo(nodeGainADSR.gain, currentTime)

  // Play the note for 1 second
  nodeOscillator.start(currentTime)
  nodeOscillator.stop(currentTime + adsrPress.duration)

  // Provide logging
  // const theFreqText = noteFreqHz.toFixed(2)
  // console.log("Playing note", key.transposes.textFraction, "at", theFreqText, "Hz")
  nodeOscillator.onended = function() {
    // console.log("Note at", theFreqText, "Hz ended")
  }

  if (key) {
    key.currentOscNode = nodeOscillator
    key.currentAdsrGainNode = nodeGainADSR
    // console.log("New note stored on", key.keyboardCode)
  } else {
    console.log("*** Note storage FAILED ***")
  }

}

export default playNote
