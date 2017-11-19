const setupControl = (state) => {
  // General control
  state.control = {}
  const stateControl = state.control
  stateControl.loopCount = 0
  stateControl.stopMainLoop = false

  // DEBUG only: app will stop animating after this number of loops/frames!
  // Approx 50 frames a second, and N seconds later it stops.
  stateControl.maxLoops = 50 * 600
  stateControl.renderFrameGap = 2

  // Timing control
  stateControl.timing = {}
  const stateTiming = stateControl.timing
  stateTiming.prevLoopStart = 0
  stateTiming.thisLoopStart = 0
  stateTiming.loopTimeMS = 0
  stateTiming.renderTimeMinMS = 10000
  stateTiming.renderTimeMaxMS = 0
  stateTiming.totalTimeS = 0
  console.log("Control state initialised")
}

export default setupControl
