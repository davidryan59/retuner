import animateInstrumentKey from '../physics/animate_instrument_key'

const instrumentKeyDownHandler = (state, keyDown) => {
  const keyDownState = keyDown.keyState
  if (keyDownState !== 1 && keyDownState !== 2) {
    state.key.moveToTop = keyDown
    keyDown.keyState = 1
    // Want to set key state to 2 after the
    // key press has been dealt with
    if (keyDown.activation.allowed(state, keyDown)) {
      const keyDownFunction = keyDown.activation.press
      if (keyDownFunction) {
        keyDownFunction(state, keyDown)
      }
      state.control.totalKeyActivations++
      keyDown.activation.count++
      animateInstrumentKey(state, keyDown)
    }
  }
}

const instrumentKeyUpHandler = (state, keyUp) => {
  const keyUpState = keyUp.keyState
  if (keyUpState !== 0) {
    keyUp.keyState = 0
    const keyUpFunction = keyUp.activation.release
    if (keyUpFunction) {
      keyUpFunction(state, keyUp)
    }
  }
}

export {instrumentKeyDownHandler, instrumentKeyUpHandler}
