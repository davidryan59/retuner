// DEBUG ONLY
// (import the file to test in browser here)

import initialiseState from './initialisation/initialiseState'
import topTextHandler from './controllers/topTextHandler'
import {keyboardDownHandler, keyboardUpHandler} from './controllers/keyboardHandlers'
import {mouseDownHandler, mouseUpHandler} from './controllers/mouseHandlers'
import windowResizeHandler from './views/windowResizeHandler'
import updateTimingInfo from './calcs/updateTimingInfo'
import checkDemoActivity from './demos/checkDemoActivity'
import checkSliderActivity from './calcs/checkSliderActivity'
import calculateForces from './physics/calculateForces'
import moveKeys from './physics/moveKeys'
import calculateNeighbouringKeys from './physics/calculateNeighbouringKeys'
import findModelCoordBounds from './calcs/findModelCoordBounds'
import { storeModelToCanvasCoords } from './calcs/convertCoords'
import drawCanvas from './views/drawCanvas'
import updateTextInHtml from './views/updateTextInHtml'
import recordRenderTime from './calcs/recordRenderTime'

const runApp = () => {
  console.log("The app has started")

  // DEBUG ONLY
  // (console log the file to be tested)

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

  // Event listeners on sliders set up via SliderController

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
