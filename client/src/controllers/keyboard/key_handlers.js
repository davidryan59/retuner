import findKeyByKeyboardCode from './find_key_by_keyboard_code'

const keyDownHandler = (state, event) => {
  const keyDownCode = event.code
  const keyDown = findKeyByKeyboardCode(state, keyDownCode)
  if (keyDown) {
    // Need an if statement to deal with keys held down
    const keyDownState = keyDown.keyState
    if (keyDownState !== 1 && keyDownState !== 2) {
      keyDown.keyState = 1
      // Make the code 2 after key press is dealt with
      // This means that if key held down it only gets dealt with once.
      // console.log("Key Down", keyDownCode)
      const keyDownFunction = keyDown.runOnPress
      if (keyDownFunction) {
        keyDownFunction(state, keyDown)
      }
    }
  }
}

const keyUpHandler = (state, event) => {
  const keyUpCode = event.code
  const keyUp = findKeyByKeyboardCode(state, keyUpCode)
  if (keyUp) {
    // No if statement needed, key up only happens once
    keyUp.keyState = 0
    // console.log("Key Up", keyUpCode)
    const keyUpFunction = keyUp.runOnRelease
    if (keyUpFunction) {
      keyUpFunction(state, keyUp)
    }

  }
}

export {keyDownHandler, keyUpHandler}
