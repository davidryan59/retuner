const setupHtmlPageElts = state => {

  const pageElts = state.pageElt

  pageElts.topText = document.querySelector("#top-text")
  pageElts.canvas = document.querySelector("#main-canvas")
  pageElts.versionNumber = document.querySelector("#version-number")
  pageElts.versionDate = document.querySelector("#version-date")
  pageElts.timeTotalS = document.querySelector("#total-time-s")
  pageElts.timeRenderMinMS = document.querySelector("#render-time-min-ms")
  pageElts.timeRenderMaxMS = document.querySelector("#render-time-max-ms")

  console.log("DOM page elements initialised")
}

export default setupHtmlPageElts
