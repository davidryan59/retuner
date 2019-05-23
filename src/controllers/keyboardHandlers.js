import findKeyByKeyboardCode from '../calcs/findKeyByKeyboardCode'
import { instrumentKeyDownHandler, instrumentKeyUpHandler } from './instrumentKeyHandlers'

const keyboardDownHandler = (state, event) => {
  const keyDownCode = event.code
  // console.log(`Key down ${keyDownCode}`)
  const keyDown = findKeyByKeyboardCode(state, keyDownCode)
  if (keyDown) {
    state.key.lastPressed = keyDown
    state.key.tempPressed = keyDown
    instrumentKeyDownHandler(state, keyDown)
  }
}

const keyboardUpHandler = (state, event) => {
  const keyUpCode = event.code
  // console.log(`Key up ${keyUpCode}`)
  const keyUp = findKeyByKeyboardCode(state, keyUpCode)
  if (keyUp) {
    state.key.tempPressed = null
    instrumentKeyUpHandler(state, keyUp)
  }
}

export {keyboardDownHandler, keyboardUpHandler}
