const changeTopText = (state, key) => {
  const loopsToUpdate = state.param.loopsToUpdateTopText
  const loopsSinceTimeout = state.control.loopsSinceTimeout
  const loopDelay = state.text.loopDelay
  state.text.loopOffset = (0 - loopsSinceTimeout - loopDelay - 10) % loopsToUpdate
  // This value will cause an update 9 or 10 frames later!
  // See code on the view
}

export default changeTopText
