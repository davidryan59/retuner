import findKeyByMousePosition from '../calculations/find_key_by_mouse_position'
import {instrumentKeyDownHandler, instrumentKeyUpHandler} from './instrument_key_handlers'

const mouseDownHandler = (state, event) => {
  const canvasX = event.offsetX
  const canvasY = event.offsetY
  const keyDown = findKeyByMousePosition(state, canvasX, canvasY)
  if (keyDown) {
    state.key.lastMoused = keyDown
    instrumentKeyDownHandler(state, keyDown)
  }
}

const mouseUpHandler = (state, event) => {
  const keyUp = state.key.lastMoused
  if (keyUp) {
    state.key.lastMoused = null
    instrumentKeyUpHandler(state, keyUp)
  }
}

export {mouseDownHandler, mouseUpHandler}
