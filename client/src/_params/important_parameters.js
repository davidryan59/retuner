const setupImportantParameters = (state) => {

  state.params = {}
  const stateParams = state.params

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
