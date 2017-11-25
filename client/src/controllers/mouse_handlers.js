import findKeyByMousePosition from '../calculations/find_key_by_mouse_position'
import {instrumentKeyDownHandler, instrumentKeyUpHandler} from './instrument_key_handlers'

const mouseDownHandler = (state, event) => {
  const canvasX = event.offsetX
  const canvasY = event.offsetY
  const keyDown = findKeyByMousePosition(canvasX, canvasY)
  if (keyDown) {
    state.keyLastMoused = keyDown
    instrumentKeyDownHandler(state, keyDown)
  }
}

const mouseUpHandler = (state, event) => {
  const keyUp = state.keyLastMoused
  if (keyUp) {
    state.keyLastMoused = null
    instrumentKeyUpHandler(state, keyUp)
  }
}

export {mouseDownHandler, mouseUpHandler}
