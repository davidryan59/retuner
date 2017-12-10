const setupImportantParameters = (state) => {

  // Some important state object structure
  state.comma = {}
  state.context = {}
  state.slider = {}
  state.map = {}
  state.key = {}
  const stateKey = state.key
  state.param = {}
  const stateParam = state.param

  // // DOESN'T YET WORK - VARYING KEYMAP BASED ON LOCALE ETC...
  // // JS file in JSON format.
  // // Maps from key presses to screen position and function
  // stateKey.file = "./keymaps/en-gb_macbook_chrome.js"
  // // There should be different maps for different locales, computers and browsers
  // // Note this is NOT YET IMPLEMENTED
  // // since the file name is hard coded in the setup instrument keys...
  // // ... some problems with importing JSON on WebPack.

  // Tuning of the whole instrument
  stateParam.baseFrequencyHz = 256

  // Every N loops (var = N) do the following:
  stateParam.loopsToRedrawCanvas = 2         // Redraw frame
  stateParam.loopsToRecalcNeighbours = 47    // Recalculate which neighbours are buttons
  stateParam.loopsToUpdateHtmlText = 13      // Update HTML Text

  // Parameters related to timeout
  stateParam.secondsToTimeout = 600
  stateParam.approxBrowserFrameRateHz = 50

  // Some of the other initialisation parameters could go here?

  console.dir(state)
  console.log("Setup some important parameters first")

}

export default setupImportantParameters
