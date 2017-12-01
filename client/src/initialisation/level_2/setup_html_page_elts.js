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

  // Setup sliders. Use 2 temporary variables, which will reassign
  let slider = null
  let source = null

  // Setup the volume slider
  pageEltSliders.volume = {}
  pageEltSliders.volume.slider = document.querySelector("#vol-slider")
  pageEltSliders.volume.display = document.querySelector("#vol-display")

  slider = pageEltSliders.volume.slider
  source = state.dB

  slider.min = source.min
  slider.step = source.step
  slider.max = source.max
  slider.value = source.current

  // Setup the key contrast slider
  pageEltSliders.contrast = {}
  pageEltSliders.contrast.slider = document.querySelector("#contrast-slider")
  pageEltSliders.contrast.display = document.querySelector("#contrast-display")

  slider = pageEltSliders.contrast.slider
  source = state.keyColourContrast

  slider.min = source.min
  slider.step = source.step
  slider.max = source.max
  slider.value = source.current

  // Setup the key spacing slider
  pageEltSliders.spacing = {}
  pageEltSliders.spacing.slider = document.querySelector("#spacing-slider")
  pageEltSliders.spacing.display = document.querySelector("#spacing-display")

  slider = pageEltSliders.spacing.slider
  source = state.keySpacing

  slider.min = source.min
  slider.step = source.step
  slider.max = source.max
  slider.value = source.current

  console.log("DOM page elements initialised")
}

export default setupHtmlPageElts
