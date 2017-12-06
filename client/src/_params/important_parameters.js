const setupImportantParameters = (state) => {

  // Some important state object structure
  state.prime = {}
  state.context = {}
  state.slider = {}
  state.slider.array = []
  state.key = {}
  const stateKey = state.key
  state.params = {}
  const stateParams = state.params

  // // DOESN'T YET WORK - VARYING KEYMAP BASED ON LOCALE ETC...
  // // JS file in JSON format.
  // // Maps from key presses to screen position and function
  // stateKey.file = "./keymaps/en-gb_macbook_chrome.js"
  // // There should be different maps for different locales, computers and browsers
  // // Note this is NOT YET IMPLEMENTED
  // // since the file name is hard coded in the setup instrument keys...
  // // ... some problems with importing JSON on WebPack.

  // Tuning of the whole instrument
  stateParams.baseFrequencyHz = 256

  // Every N loops (var = N) do the following:
  stateParams.redrawCanvas = 2         // Redraw frame
  stateParams.recalcNeighbours = 47    // Recalculate which neighbours are buttons
  stateParams.updateHtmlText = 13      // Update HTML Text

  // Parameters related to timeout
  stateParams.secondsToTimeout = 600
  stateParams.approxBrowserFrameRate = 50

  // Some of the other initialisation parameters could go here?

  console.log("Setup some important parameters first")

}

export default setupImportantParameters
