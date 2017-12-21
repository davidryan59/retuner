const stopNote = (state, key) => {
  let prevOscNode = key.currentOscNode
  let prevAdsrGainNode = key.currentAdsrGainNode
  const currentTime = state.context.audio.currentTime
  const delayStoppingTime = 0.3      // Must be greater than the ADSR final change!
  const minAmplitude = 1e-5

  if (prevOscNode) {

    // // Taken this out
    // // Worked on Chrome, didn't work on Safari!
    // // Every osc node is started and given a stopping time
    // // so it should stop anyway.
    // prevOscNode.stop(currentTime + delayStoppingTime)

    prevAdsrGainNode.gain.exponentialRampToValueAtTime(minAmplitude, currentTime + delayStoppingTime)
    prevOscNode = null
    prevAdsrGainNode = null
    console.log(`Stopped note`)
  }
}

export default stopNote
