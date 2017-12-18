import detectBrowser from '../browser/detect_browser'

const setupImportantParameters = (state) => {

  const stateParam = state.param

  // Get browser info
  detectBrowser(state)

  // Frequencies
  stateParam.baseFrequencyHz = 256
  stateParam.maxMaxHz = 8000          // Slider max
  stateParam.currentMaxHz = 2048      // Slider value
  stateParam.currentMinHz = 64        // Slider value
  stateParam.minMinHz = 3             // Slider min

  // Speed
  stateParam.startBPM = 160

  // Looping
  stateParam.loopsToRedrawCanvas = 2         // Redraw frame
  stateParam.loopsToRecalcNeighbours = 47    // Recalculate which neighbours are buttons
  stateParam.loopsToUpdateHtmlText = 13      // Update HTML Text
  stateParam.loopsToUpdateTopText = 61 * 59  // Update top text once a minute, e.g. tips and help

  // Timing
  stateParam.secondsToTimeout = 600
  stateParam.approxBrowserFrameRateHz = 50

  console.log("Setup some important parameters first. Here's the state object:")
  console.dir(state)

}

export default setupImportantParameters
