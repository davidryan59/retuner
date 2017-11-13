const playNote = (state, freqFactor=1) => {
  const theFreq = state.freqs.oscFreq * freqFactor
  const theFreqText = Math.round(theFreq*100)/100
  console.log("Playing note at", theFreqText, "Hz")

  // Implement note playing here

  // Create an oscillator node and gain node
  const oscillator = state.audioContext.createOscillator();
  const gainNode = state.audioContext.createGain();
  // Specify the oscillator type from state
  oscillator.type = state.waveform.type
  // Specify the oscillator frequency
  const currentTime = state.audioContext.currentTime
  oscillator.frequency.setValueAtTime(state.freqs.oscFreq, currentTime)  // Alternative way
  // Setup the gain node amplitude
  gainNode.gain.value = state.amps.initialAmp
  // Connect the nodes to the audio context
  oscillator.connect(gainNode)
  gainNode.connect(state.audioContext.destination)
  // Play the note for 1 second
  oscillator.start(currentTime)
  oscillator.stop(currentTime + 1.00)
  oscillator.onended = function() {
    console.log("Note at", theFreqText, "Hz finished")
  }

}

export default playNote
