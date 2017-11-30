import initialiseState from './initialisation/initialise_state'
import {keyboardDownHandler, keyboardUpHandler} from './controllers/keyboard_handlers'
import {mouseDownHandler, mouseUpHandler} from './controllers/mouse_handlers'
import windowResizeHandler from './views/window_resize_handler'
import updateTimingInfo from './calculations/update_timing_info'
import calculateForces from './physics/calculate_forces'
import moveKeys from './physics/move_keys'
import calculateNeighbouringKeys from './physics/calculate_neighbouring_keys'
import findViewObjectBounds from './calculations/find_view_object_bounds'
import storeModelToCanvasCoords from './calculations/convert_coords/store_model_to_canvas_coords'
import drawCanvas from './views/draw_canvas'
import updateTextInHtml from './views/update_text_in_html'
import recordRenderTime from './calculations/record_render_time'

const runApp = () => {
  console.log("The app has started")

  // Have a central place where all app state is stored
  const state = {}
  initialiseState(state)

  // Make window respond to key presses
  window.addEventListener('keydown', event => {keyboardDownHandler(state, event)})
  window.addEventListener('keyup', event => {keyboardUpHandler(state, event)})

  // Make window respond to mouse presses
  // window.addEventListener('mousedown', event => {mouseDownHandler(state, event)})
  // window.addEventListener('mouseup', event => {mouseUpHandler(state, event)})
  state.pageElts.canvas.addEventListener('mousedown', event => {mouseDownHandler(state, event)})
  state.pageElts.canvas.addEventListener('mouseup', event => {mouseUpHandler(state, event)})

  // If window resizes, may need to change canvas
  window.addEventListener('resize', event => {windowResizeHandler(state, event)})

  window.mainLoop = timeLoopStart => {
    // timeLoopStart is a decimal number, a time precise to 0.005ms :)
    if (state.control.timeoutAfterLoops < state.control.loopsSinceTimeout ) {
      console.log("App timed out")
      state.control.stopMainLoop = true
    }
    if (!state.control.stopMainLoop) {
      window.requestAnimationFrame(mainLoop)
      // This makes mainLoop run once per browser frame
    } else {
      console.log("Main loop ended. State:")
      console.dir(state)
    }

    updateTimingInfo(state, timeLoopStart)
    calculateForces(state)
    moveKeys(state)
    // Recalculate the neighbours not every loop since
    // there are 65 * 64 / 2 = 2080 pairs to check
    if (state.control.loopsSinceTimeout % state.params.recalcNeighbours === 0) {
      calculateNeighbouringKeys(state)
    }
    // Only do graphics every N frames
    if (state.control.loopsSinceTimeout % state.params.redrawCanvas === 0) {
      findViewObjectBounds(state)
      storeModelToCanvasCoords(state)
      drawCanvas(state)
    }
    updateTextInHtml(state)
    recordRenderTime(state, timeLoopStart)
    state.control.loopsSinceTimeout++

  }
  window.requestAnimationFrame(mainLoop)
  console.log("Main loop started. The app is listening for input")

}

window.addEventListener('DOMContentLoaded', runApp)
