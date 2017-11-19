const pauseApp = (state, key) => {
  if (!state.control.stopMainLoop) {
    state.control.stopMainLoop = true
    console.log("Paused app")
  } else {
    state.control.stopMainLoop = false
    state.control.timing.thisLoopStart = window.performance.now()  // Make total time correct
    console.log("Resumed app")
    window.requestAnimationFrame(mainLoop)
  }
}

export default pauseApp
