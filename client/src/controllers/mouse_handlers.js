import findKeyByMousePosition from '../calculations/find_key_by_mouse_position'
import animateInstrumentKey from '../physics/animate_instrument_key'

const mouseDownHandler = (state, event) => {
  // const keyDownCode = event.code
  // const keyDown = findKeyByKeyboardCode(state, keyDownCode)
  // if (keyDown) {
  //   // Need an if statement to deal with keys held down
  //   const keyDownState = keyDown.keyState
  //   if (keyDownState !== 1 && keyDownState !== 2) {
  //     keyDown.keyState = 1
  //     // Make the code 2 after key press is dealt with
  //     // This means that if key held down it only gets dealt with once.
  //     // console.log("Key Down", keyDownCode)
  //     const keyDownFunction = keyDown.runOnPress
  //     if (keyDownFunction) {
  //       keyDownFunction(state, keyDown)
  //     }
  //     state.control.totalKeyPresses++
  //     keyDown.countPresses++
  //     state.keyLastPressed = keyDown
  //     animateInstrumentKey(state, keyDown)
  //   }
  // }
  const canvasX = event.offsetX
  const canvasY = event.offsetY
  const key = findKeyByMousePosition(canvasX, canvasY)
  console.log("Mouse down", canvasX, canvasY)
}

const mouseUpHandler = (state, event) => {
  // const keyUpCode = event.code
  // const keyUp = findKeyByKeyboardCode(state, keyUpCode)
  // if (keyUp) {
  //   // No if statement needed, key up only happens once
  //   keyUp.keyState = 0
  //   // console.log("Key Up", keyUpCode)
  //   const keyUpFunction = keyUp.runOnRelease
  //   if (keyUpFunction) {
  //     keyUpFunction(state, keyUp)
  //   }
  // }
  const key = null      // Need to save the key on mouse down, so mouse up has its reference
  console.log("Mouse up", event, key)
  // console.log("Event", event)
  // console.log("Key", key)
}

export {mouseDownHandler, mouseUpHandler}
