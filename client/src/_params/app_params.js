const setupAppParams = (state) => {

  state.params = {}
  const stateParams = state.params

  // Every N loops do the following:
  stateParams.redrawCanvas = 2         // Redraw frame
  stateParams.recalcNeighbours = 47    // Recalculate which neighbours are buttons
  stateParams.updateHtmlText = 13      // Update HTML Text
  console.log("App parameters set up")

}

export default setupAppParams
