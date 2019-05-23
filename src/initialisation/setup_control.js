const setupControl = (state) => {

  // Input vars
  const stateParams = state.param
  const secondsToTimeout = stateParams.secondsToTimeout
  const approxBrowserFrameRate = stateParams.approxBrowserFrameRateHz

  // General control
  const stateControl = state.control
  stateControl.totalKeyActivations = 0
  stateControl.mainLoopPaused = false
  stateControl.loopsSinceTimeout = 0
  stateControl.loopsToTimeout = secondsToTimeout * approxBrowserFrameRate

  // Timing control
  stateControl.timing = {}
  const stateTiming = stateControl.timing
  stateTiming.loopStartPrev = 0
  stateTiming.loopStartThis = 0
  stateTiming.timeLoopMS = 0
  stateTiming.timeRenderMinMS = 10000
  stateTiming.timeRenderMaxMS = 0
  stateTiming.timeTotalS = 0
  console.log("Control state and timing initialised")
}

export default setupControl
