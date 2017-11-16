import initialiseState from './initialisation/initialise_state'
import {keyDownHandler, keyUpHandler} from './controllers/keyboard/key_handlers'
import doTiming from './controllers/general/do_timing'
import moveKeys from './controllers/general/move_keys'
// import reSortKeys from './controllers/general/re_sort_keys'
import drawCanvas from './views/draw_canvas'
import updateTextInHtml from './views/update_text_in_html'

const runApp = () => {
  console.log("The app has started")

  // Have a central place where all app state is stored
  const state = {}
  initialiseState(state)

  // Make window respond to key presses
  window.addEventListener('keydown', event => {keyDownHandler(state, event)})
  window.addEventListener('keyup', event => {keyUpHandler(state, event)})

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
    // Only render every 13 frames
    if (state.control.loopCount % state.control.renderFrameGap === 0) {
      doTiming(state, timeLoopStart)
      moveKeys(state)
      // reSortKeys(state)
      drawCanvas(state)
      updateTextInHtml(state)
      const timeRenderEnd = window.performance.now()
      state.control.timing.renderTimeMS = timeRenderEnd - timeLoopStart
    }

  }
  window.requestAnimationFrame(mainLoop)
  console.log("Main loop started. The app is listening for input")

}

window.addEventListener('DOMContentLoaded', runApp)
