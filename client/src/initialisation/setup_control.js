const setupControl = (state) => {

  // Input vars
  const stateParams = state.params
  const secondsToTimeout = stateParams.secondsToTimeout
  const approxBrowserFrameRate = stateParams.approxBrowserFrameRate

  // General control
  state.control = {}
  const stateControl = state.control
  stateControl.totalKeyPresses = 0
  stateControl.stopMainLoop = false
  stateControl.loopsSinceTimeout = 0
  stateControl.timeoutAfterLoops = secondsToTimeout * approxBrowserFrameRate

  // Timing control
  stateControl.timing = {}
  const stateTiming = stateControl.timing
  stateTiming.prevLoopStart = 0
  stateTiming.thisLoopStart = 0
  stateTiming.loopTimeMS = 0
  stateTiming.renderTimeMinMS = 10000
  stateTiming.renderTimeMaxMS = 0
  stateTiming.totalTimeS = 0
  console.log("Control state and timing initialised")
}

export default setupControl
