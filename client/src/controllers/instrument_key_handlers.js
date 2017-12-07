import animateInstrumentKey from '../physics/animate_instrument_key'

const instrumentKeyDownHandler = (state, keyDown) => {
  const keyDownState = keyDown.keyState
  if (keyDownState !== 1 && keyDownState !== 2) {
    keyDown.keyState = 1
    // Want to set key state to 2 after the
    // key press has been dealt with
    const keyDownFunction = keyDown.runOnPress
    if (keyDownFunction) {
      keyDownFunction(state, keyDown)
    }
    state.control.totalKeyActivations++
    keyDown.countActivations++
    animateInstrumentKey(state, keyDown)
  }
}

const instrumentKeyUpHandler = (state, keyUp) => {
  const keyUpState = keyUp.keyState
  if (keyUpState !== 0) {
    keyUp.keyState = 0
    const keyUpFunction = keyUp.runOnRelease
    if (keyUpFunction) {
      keyUpFunction(state, keyUp)
    }
  }
}

export {instrumentKeyDownHandler, instrumentKeyUpHandler}
