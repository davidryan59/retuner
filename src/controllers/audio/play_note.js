const timeCancelS = 0.01
const timeSilentS = 0.02
const timeStopS = 0.03
const timeDisconnectS = 0.04

const playNote = (state, key, extraFreqFactor=1) => {
  // Extra frequency factor used in some cases,
  // e.g. if transposition is switched off

  // Retrieve relevant state objects
  const audioContext = state.context.audio
  const waveform = state.waveform
  const stateFreq = state.freq
  const adsrPress = state.waveform.adsrOnPressNote

  // Create oscillator and gain nodes, and connect them to audio context
  let nodeOsc = audioContext.createOscillator();
  let nodeGain = audioContext.createGain();
  nodeOsc.connect(nodeGain)
  nodeGain.connect(state.mixer)

  // Specify the oscillator frequency and type
  const currentTime = audioContext.currentTime
  const baseFreqHz = state.slider.baseFreq.getValue()
  const instrumentCentralFreqDecimalRel = stateFreq.decimalCentreCurrent
  const noteFreqHz = baseFreqHz * instrumentCentralFreqDecimalRel * extraFreqFactor
  const theFreqText = noteFreqHz.toFixed(2)
  nodeOsc.frequency.setValueAtTime(noteFreqHz, currentTime)
  nodeOsc.type = waveform.getType(state)

  // Apply the ADSR envelope
  adsrPress.applyTo(nodeGain.gain, currentTime)
  const noteLength = adsrPress.duration

  // Play the note for duration of ADSR
  nodeOsc.start(currentTime)
  
  // Write a function to stop the note
  const stopNote = () => {
    const timeS = audioContext.currentTime
    try {
      nodeGain.gain.cancelAndHoldAtTime(timeS + timeCancelS)
      nodeGain.gain.linearRampToValueAtTime(0, timeS + timeSilentS)
      nodeOsc.stop(timeS + timeStopS)
    } catch(e) {
      // console.log(`Already stopped note at ${theFreqText} Hz`)
      return
    }
    setTimeout( () => {
      nodeOsc.disconnect()
      nodeGain.disconnect() 
      nodeOsc = null     
      nodeGain = null     
      key.stopNote = null
      console.log(`Stopped and disconnected note at ${theFreqText} Hz`)
    }, timeDisconnectS * 1000)
  }
  key.stopNote = stopNote
  setTimeout( () => stopNote(), noteLength * 1000)
  
  console.log(`Played note at ${theFreqText} Hz`)

}

export default playNote
