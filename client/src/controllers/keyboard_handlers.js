import findKeyByKeyboardCode from '../calculations/find_key_by_keyboard_code'
import {instrumentKeyDownHandler, instrumentKeyUpHandler} from './instrument_key_handlers'

const keyboardDownHandler = (state, event) => {
  const keyDownCode = event.code
  const keyDown = findKeyByKeyboardCode(state, keyDownCode)
  if (keyDown) {
    state.key.moveToTop = keyDown
    state.key.lastPressed = keyDown
    state.key.tempPressed = keyDown
    instrumentKeyDownHandler(state, keyDown)
  }
}

const keyboardUpHandler = (state, event) => {
  const keyUpCode = event.code
  const keyUp = findKeyByKeyboardCode(state, keyUpCode)
  if (keyUp) {
    state.key.tempPressed = null
    instrumentKeyUpHandler(state, keyUp)
  }
}

export {keyboardDownHandler, keyboardUpHandler}
