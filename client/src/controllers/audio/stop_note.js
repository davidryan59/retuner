const stopNote = (state, key) => {
  let prevOscNode = key.currentOscNode
  let prevAdsrGainNode = key.currentAdsrGainNode
  const currentTime = state.audioContext.currentTime
  const delayStoppingTime = 0.05
  const minAmplitude = 0.03

  if (prevOscNode) {
    prevOscNode.stop(currentTime + delayStoppingTime)
    prevAdsrGainNode.gain.exponentialRampToValueAtTime(minAmplitude, currentTime + delayStoppingTime)
    prevOscNode = null
    prevAdsrGainNode = null
  }
}

export default stopNote
