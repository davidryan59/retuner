const playNote = (state, freqFactor=1) => {
  // 2nd parameter allows dynamic retuning of notes
  // away from the currentFreq, if desired

  // Retrieve relevant state objects
  const audioContext = state.audioContext
  const waveform = state.waveform
  const stateFreqs = state.freqs
  const stateAmps = state.amps

  // Implement note playing here

  // Create an oscillator node and gain node
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  // Specify the oscillator type from state
  oscillator.type = waveform.type
  // Specify the oscillator frequency
  const currentTime = audioContext.currentTime
  const theFreq = stateFreqs.currentFreq * freqFactor
  oscillator.frequency.setValueAtTime(theFreq, currentTime)  // Alternative way
  // Setup the gain node amplitude
  gainNode.gain.value = stateAmps.currentAmp
  // Connect the nodes to the audio context
  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)
  // Play the note for 1 second
  oscillator.start(currentTime)
  oscillator.stop(currentTime + 1.00)
  // Provide logging
  const theFreqText = Math.round(theFreq*100)/100
  console.log("Playing note at", theFreqText, "Hz")
  oscillator.onended = function() {
    console.log("Note at", theFreqText, "Hz finished")
  }

}

export default playNote
