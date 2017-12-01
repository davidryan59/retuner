const setupHtmlPageElts = (state) => {

  state.pageElts = {}
  const pageElts = state.pageElts

  pageElts.canvas = document.querySelector("#main-canvas")
  pageElts.versionNumber = document.querySelector("#version-number")
  pageElts.versionDate = document.querySelector("#version-date")
  pageElts.totalTimeS = document.querySelector("#total-time-s")
  pageElts.renderTimeMinMS = document.querySelector("#render-time-min-ms")
  pageElts.renderTimeMaxMS = document.querySelector("#render-time-max-ms")

  pageElts.sliders = {}
  const pageEltSliders = pageElts.sliders

  pageEltSliders.volume = {}
  pageEltSliders.volume.slider = document.querySelector("#vol-slider")
  pageEltSliders.volume.display = document.querySelector("#vol-display")

  const slider = pageEltSliders.volume.slider
  const source = state.dB
  slider.min = source.min
  slider.step = source.step
  slider.max = source.max
  slider.value = source.current

  pageEltSliders.contrast = {}
  pageEltSliders.contrast.slider = document.querySelector("#contrast-slider")
  pageEltSliders.contrast.display = document.querySelector("#contrast-display")

  // Not yet implemented - setup from state

  pageEltSliders.spacing = {}
  pageEltSliders.spacing.slider = document.querySelector("#spacing-slider")
  pageEltSliders.spacing.display = document.querySelector("#spacing-display")

  // Not yet implemented - setup from state

  console.log("DOM page elements initialised")
}

export default setupHtmlPageElts
