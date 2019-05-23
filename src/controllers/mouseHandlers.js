import findKeyByMousePosition from '../calcs/findKeyByMousePosition'
import { instrumentKeyDownHandler, instrumentKeyUpHandler } from './instrumentKeyHandlers'

export const mouseDownHandler = (state, event) => {
  const canvasX = event.offsetX
  const canvasY = event.offsetY
  const keyDown = findKeyByMousePosition(state, canvasX, canvasY)
  if (keyDown) {
    state.key.lastMoused = keyDown
    state.key.tempMoused = keyDown
    instrumentKeyDownHandler(state, keyDown)
  }
}

export const mouseUpHandler = (state, event) => {
  const keyUp = state.key.tempMoused
  if (keyUp) {
    state.key.tempMoused = null
    instrumentKeyUpHandler(state, keyUp)
  }
}
