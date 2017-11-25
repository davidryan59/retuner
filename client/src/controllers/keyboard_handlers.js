import findKeyByKeyboardCode from '../calculations/find_key_by_keyboard_code'
import {instrumentKeyDownHandler, instrumentKeyUpHandler} from './instrument_key_handlers'

const keyboardDownHandler = (state, event) => {
  const keyDownCode = event.code
  const keyDown = findKeyByKeyboardCode(state, keyDownCode)
  if (keyDown) {
    instrumentKeyDownHandler(state, keyDown)
  }
}

const keyboardUpHandler = (state, event) => {
  const keyUpCode = event.code
  const keyUp = findKeyByKeyboardCode(state, keyUpCode)
  if (keyUp) {
    instrumentKeyUpHandler(state, keyUp)
  }
}

export {keyboardDownHandler, keyboardUpHandler}
