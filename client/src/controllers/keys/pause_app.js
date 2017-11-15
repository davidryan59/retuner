const pauseApp = (state, key) => {
  state.control.stopMainLoop = true
  console.log("Paused app")
}

export default pauseApp
