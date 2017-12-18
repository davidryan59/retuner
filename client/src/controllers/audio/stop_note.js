const stopNote = (state, key) => {
  let prevOscNode = key.currentOscNode
  let prevAdsrGainNode = key.currentAdsrGainNode
  const currentTime = state.context.audio.currentTime
  // const delayStoppingTime = 0.05
  // const minAmplitude = 0.03
  const delayStoppingTime = 0.1
  const minAmplitude = 0.005

  if (prevOscNode) {
    prevOscNode.stop(currentTime + delayStoppingTime)
    prevAdsrGainNode.gain.exponentialRampToValueAtTime(minAmplitude, currentTime + delayStoppingTime)
    prevOscNode = null
    prevAdsrGainNode = null
    console.log(`Stopped note`)
  }
}

export default stopNote
