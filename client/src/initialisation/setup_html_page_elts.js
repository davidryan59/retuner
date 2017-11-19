const setupHtmlPageElts = (state) => {
  state.pageElts = {}
  const pageElts = state.pageElts
  pageElts.canvas = document.querySelector("#main-canvas")
  pageElts.versionNumber = document.querySelector("#version-number")
  pageElts.totalTimeS = document.querySelector("#total-time-s")
  pageElts.renderTimeMS = document.querySelector("#render-time-ms")
  console.log("DOM page elements initialised")
}

export default setupHtmlPageElts
