import detectBrowser from '../browser/detectBrowser'

const setupImportantParameters = state => {

  const stateParam = state.param

  // Get browser info
  detectBrowser(state)

  // Frequencies
  stateParam.minMinHz = 8             // Slider min
  stateParam.currentMinHz = 64        // Min slider initial value
  stateParam.baseFrequencyHz = 256    // Base freq slider initial value
  stateParam.currentMaxHz = 2048      // Max slider initial value
  stateParam.maxMaxHz = 8196          // Slider max

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
