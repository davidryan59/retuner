// DEBUG ONLY
// import Slider from './models/slider'

import initialiseState from './initialisation/initialise_state'
import topTextHandler from './controllers/top_text_handler'
import {keyboardDownHandler, keyboardUpHandler} from './controllers/keyboard_handlers'
import {mouseDownHandler, mouseUpHandler} from './controllers/mouse_handlers'
import {volumeSliderHandler, bpmSliderHandler, contrastSliderHandler, spacingSliderHandler} from './controllers/slider_handlers'
import windowResizeHandler from './views/window_resize_handler'
import updateTimingInfo from './calculations/update_timing_info'
import checkDemoActivity from './demos/check_demo_activity'
import checkSliderActivity from './calculations/check_slider_activity'
import calculateForces from './physics/calculate_forces'
import moveKeys from './physics/move_keys'
import calculateNeighbouringKeys from './physics/calculate_neighbouring_keys'
import findModelCoordBounds from './calculations/find_model_coord_bounds'
import storeModelToCanvasCoords from './calculations/convert_coords/store_model_to_canvas_coords'
import drawCanvas from './views/draw_canvas'
import updateTextInHtml from './views/update_text_in_html'
import recordRenderTime from './calculations/record_render_time'

const runApp = () => {
  console.log("The app has started")

  // // DEBUG ONLY
  // // (console log the file to be tested)
  // // console.dir("Nothing to test")

  // Have a central place where all app state is stored
  const state = {}
  initialiseState(state)

  // Make window respond to key presses
  window.addEventListener('keydown', event => {keyboardDownHandler(state, event)})
  window.addEventListener('keyup', event => {keyboardUpHandler(state, event)})

  // Top Text switching
  state.pageElt.topText.addEventListener('mouseup', event => {topTextHandler(state, event)})

  // Make window respond to mouse presses
  // window.addEventListener('mousedown', event => {mouseDownHandler(state, event)})
  // window.addEventListener('mouseup', event => {mouseUpHandler(state, event)})
  state.pageElt.canvas.addEventListener('mousedown', event => {mouseDownHandler(state, event)})
  state.pageElt.canvas.addEventListener('mouseup', event => {mouseUpHandler(state, event)})

  // If window resizes, may need to change canvas
  window.addEventListener('resize', event => {windowResizeHandler(state, event)})

  // Event listeners on sliders set up via the Slider Controllers (NEW)

  // // Put event listeners on sliders (OLD)
  // const stateSlider = state.pageElt.sliders
  // stateSlider.volume.slider.addEventListener('input', event => {volumeSliderHandler(state, event)})
  // stateSlider.bpm.slider.addEventListener('input', event => {bpmSliderHandler(state, event)})
  // stateSlider.colourContrast.slider.addEventListener('input', event => {contrastSliderHandler(state, event)})
  // stateSlider.keySize.slider.addEventListener('input', event => {spacingSliderHandler(state, event)})
  // // (Previously 'change' listeners, now 'input' listeners. 1st Dec 2017)

  window.mainLoop = timeLoopStart => {
    // timeLoopStart is a decimal number, a time precise to 0.005ms :)
    if (state.control.loopsToTimeout < state.control.loopsSinceTimeout ) {
      console.log("App timed out")
      state.control.mainLoopPaused = true
    }
    if (!state.control.mainLoopPaused) {
      window.requestAnimationFrame(mainLoop)
      // This makes mainLoop run once per browser frame
    } else {
      // Redraw one more time before pausing, e.g. pause button animation
      drawCanvas(state)
      console.log("App has paused. State:")
      console.dir(state)
    }

    updateTimingInfo(state, timeLoopStart)
    checkDemoActivity(state)
    checkSliderActivity(state)
    calculateForces(state)
    moveKeys(state)
    if (state.control.loopsSinceTimeout % state.param.loopsToRecalcNeighbours === 0) {
      calculateNeighbouringKeys(state)
    }
    if (state.control.loopsSinceTimeout % state.param.loopsToRedrawCanvas === 0) {
      findModelCoordBounds(state)
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
