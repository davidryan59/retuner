import initialiseState from './initialisation/initialise_state'
import {keyDownHandler, keyUpHandler} from './controllers/keyboard/key_handlers'
import windowResizeHandler from './views/window_resize_handler'
import doTiming from './controllers/general/do_timing'
import moveKeys from './controllers/general/move_keys'
import findViewObjectBounds from './controllers/general/find_view_object_bounds'
import updateCanvasCoords from './views/update_canvas_coords'
import drawCanvas from './views/draw_canvas'
import updateTextInHtml from './views/update_text_in_html'
import recordRenderTime from './views/record_render_time'

const runApp = () => {
  console.log("The app has started")

  // Have a central place where all app state is stored
  const state = {}
  state.versionNumber = "v1.0.0"     // 19th Nov 2017
  initialiseState(state)

  // Make window respond to key presses
  window.addEventListener('keydown', event => {keyDownHandler(state, event)})
  window.addEventListener('keyup', event => {keyUpHandler(state, event)})

  // If window resizes, may need to change canvas
  window.addEventListener('resize', event => {windowResizeHandler(state, event)})

  window.mainLoop = timeLoopStart => {
    // timeLoopStart is a decimal number, a time precise to 0.005ms :)
    if (
      state.control.loopCount < state.control.maxLoops
      && !state.control.stopMainLoop
    ) {
      window.requestAnimationFrame(mainLoop)
      // This makes mainLoop run once per browser frame
    } else {
      console.log("Main loop ended. State:")
      console.dir(state)
    }

    state.control.loopCount++
    doTiming(state, timeLoopStart)
    moveKeys(state)
    // Only do graphics every N frames
    if (state.control.loopCount % state.control.renderFrameGap === 0) {
      findViewObjectBounds(state)
      updateCanvasCoords(state)
      drawCanvas(state)
    }
    updateTextInHtml(state)
    recordRenderTime(state, timeLoopStart)

  }
  window.requestAnimationFrame(mainLoop)
  console.log("Main loop started. The app is listening for input")

}

window.addEventListener('DOMContentLoaded', runApp)
