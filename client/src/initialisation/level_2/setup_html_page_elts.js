const setupHtmlPageElts = (state) => {
  state.pageElts = {}
  const pageElts = state.pageElts
  pageElts.canvas = document.querySelector("#main-canvas")
  pageElts.versionNumber = document.querySelector("#version-number")
  pageElts.versionDate = document.querySelector("#version-date")
  pageElts.totalTimeS = document.querySelector("#total-time-s")
  pageElts.renderTimeMinMS = document.querySelector("#render-time-min-ms")
  pageElts.renderTimeMaxMS = document.querySelector("#render-time-max-ms")
  console.log("DOM page elements initialised")
}

export default setupHtmlPageElts
