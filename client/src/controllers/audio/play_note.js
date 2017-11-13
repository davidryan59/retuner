const playNote = (state, key, extraFreqFactor=1) => {
  // Extra frequency factor used in some cases,
  // e.g. if transposition is switched off

  // Retrieve relevant state objects
  const audioContext = state.audioContext
  const waveform = state.waveform
  const stateFreqs = state.freqs
  const stateAmps = state.amps

  // Implement note playing here

  // Create oscillator and gain nodes, and connect them to audio context
  const nodeOscillator = audioContext.createOscillator();
  const nodeGain = audioContext.createGain();
  nodeOscillator.connect(nodeGain)
  nodeGain.connect(audioContext.destination)

  // Specify the oscillator frequency and type
  const currentTime = audioContext.currentTime
  const theFreq = stateFreqs.currentFreq * extraFreqFactor
  nodeOscillator.frequency.setValueAtTime(theFreq, currentTime)
  nodeOscillator.type = waveform.type

  // Setup the gain node amplitude
  nodeGain.gain.value = stateAmps.currentAmp

  // Play the note for 1 second
  nodeOscillator.start(currentTime)
  nodeOscillator.stop(currentTime + 1.00)
  // *** IMPROVE: Use an ADSR ***

  // Provide logging
  const theFreqText = Math.round(theFreq*100)/100
  console.log("Playing note at", theFreqText, "Hz")
  nodeOscillator.onended = function() {
    console.log("Note at", theFreqText, "Hz ended")
  }

  if (key) {
    key.currentNote = nodeOscillator
    // console.log("New note stored on", key.keyboardCode)
  } else {
    console.log("*** Note storage FAILED ***")
  }

}

export default playNote
