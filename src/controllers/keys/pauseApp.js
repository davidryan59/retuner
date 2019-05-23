const pauseApp = (state, key) => {
  if (!state.control.mainLoopPaused) {
    state.control.mainLoopPaused = true
  } else {
    state.control.mainLoopPaused = false
    state.control.loopsSinceTimeout = 0
    state.control.timing.loopStartThis = window.performance.now()  // Make total time correct
    console.log("App has resumed")
    window.requestAnimationFrame(mainLoop)
  }
}

export default pauseApp
