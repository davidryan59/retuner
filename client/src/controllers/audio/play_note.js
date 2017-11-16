import ADSREnvelope from "adsr-envelope"
import decibelToAmplitude from "../../calculations/decibel_to_amplitude"

const adsr = new ADSREnvelope({
  attackTime: 0.02,
  decayTime: 0.2,
  sustainLevel: 0.7,
  gateTime: 0.4,
  releaseTime: 2,
  releaseCurve: "exp"
})

const playNote = (state, key, extraFreqFactor=1) => {
  // Extra frequency factor used in some cases,
  // e.g. if transposition is switched off

  // Retrieve relevant state objects
  const audioContext = state.audioContext
  const waveform = state.waveform
  const stateFreqs = state.freqs

  // Implement note playing here

  // Create oscillator and gain nodes, and connect them to audio context
  const nodeOscillator = audioContext.createOscillator();
  const nodeGainADSR = audioContext.createGain();
  const nodeGainVolControl = audioContext.createGain();
  nodeOscillator.connect(nodeGainADSR)
  nodeGainADSR.connect(nodeGainVolControl)
  nodeGainVolControl.connect(audioContext.destination)

  // Specify the oscillator frequency and type
  const currentTime = audioContext.currentTime
  const theFreq = stateFreqs.currentFreq * extraFreqFactor
  nodeOscillator.frequency.setValueAtTime(theFreq, currentTime)
  nodeOscillator.type = waveform.type(state)

  // Setup the gain node amplitude
  nodeGainVolControl.gain.value = decibelToAmplitude(state.dB.current)

  // Apply the ADSR envelope
  adsr.applyTo(nodeGainADSR.gain, currentTime)

  // Play the note for 1 second
  nodeOscillator.start(currentTime)
  nodeOscillator.stop(currentTime + adsr.duration)
  // *** IMPROVE: Use an ADSR ***

  // Provide logging
  const theFreqText = Math.round(theFreq*100)/100
  // console.log("Playing note", key.transposes.text, "at", theFreqText, "Hz")
  nodeOscillator.onended = function() {
    // console.log("Note at", theFreqText, "Hz ended")
  }

  if (key) {
    key.currentNote = nodeOscillator
    // console.log("New note stored on", key.keyboardCode)
  } else {
    console.log("*** Note storage FAILED ***")
  }

}

export default playNote
