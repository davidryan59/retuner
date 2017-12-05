// // Refactor out the code repeated 3 times below
// // into a function like this...
// const sliderSetup = (sliderElt, displayText, view, model) => {
//
// }

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
  let sliderView = null
  let sliderModel = null

  // Setup the volume slider
  pageEltSliders.volume = {}
  pageEltSliders.volume.slider = document.querySelector("#vol-slider")
  pageEltSliders.volume.display = document.querySelector("#vol-display")

  sliderView = pageEltSliders.volume.slider
  sliderModel = state.slider.volume

  sliderView.min = sliderModel.min
  sliderView.step = sliderModel.step
  sliderView.max = sliderModel.max
  sliderView.value = sliderModel.current

  // Setup the key contrast slider
  pageEltSliders.contrast = {}
  pageEltSliders.contrast.slider = document.querySelector("#contrast-slider")
  pageEltSliders.contrast.display = document.querySelector("#contrast-display")

  sliderView = pageEltSliders.contrast.slider
  sliderModel = state.slider.keyColourContrast

  sliderView.min = sliderModel.min
  sliderView.step = sliderModel.step
  sliderView.max = sliderModel.max
  sliderView.value = sliderModel.current

  // Setup the key spacing slider
  pageEltSliders.spacing = {}
  pageEltSliders.spacing.slider = document.querySelector("#spacing-slider")
  pageEltSliders.spacing.display = document.querySelector("#spacing-display")

  sliderView = pageEltSliders.spacing.slider
  sliderModel = state.slider.keySpacing

  sliderView.min = sliderModel.min
  sliderView.step = sliderModel.step
  sliderView.max = sliderModel.max
  sliderView.value = sliderModel.current

  console.log("DOM page elements initialised")
}

export default setupHtmlPageElts
