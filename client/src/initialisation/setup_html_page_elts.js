// // Refactor out the code repeated 3 times below
// // into a function like this...
// const sliderSetup = (sliderElt, displayText, view, model) => {
//
// }

const setupHtmlPageElts = (state) => {

  state.pageElt = {}
  const pageElts = state.pageElt

  pageElts.canvas = document.querySelector("#main-canvas")
  pageElts.versionNumber = document.querySelector("#version-number")
  pageElts.versionDate = document.querySelector("#version-date")
  pageElts.timeTotalS = document.querySelector("#total-time-s")
  pageElts.timeRenderMinMS = document.querySelector("#render-time-min-ms")
  pageElts.timeRenderMaxMS = document.querySelector("#render-time-max-ms")

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
  pageEltSliders.colourContrast = {}
  pageEltSliders.colourContrast.slider = document.querySelector("#contrast-slider")
  pageEltSliders.colourContrast.display = document.querySelector("#contrast-display")

  sliderView = pageEltSliders.colourContrast.slider
  sliderModel = state.slider.colourContrast

  sliderView.min = sliderModel.min
  sliderView.step = sliderModel.step
  sliderView.max = sliderModel.max
  sliderView.value = sliderModel.current

  // Setup the key spacing slider
  pageEltSliders.keySize = {}
  pageEltSliders.keySize.slider = document.querySelector("#spacing-slider")
  pageEltSliders.keySize.display = document.querySelector("#spacing-display")

  sliderView = pageEltSliders.keySize.slider
  sliderModel = state.slider.keySize

  sliderView.min = sliderModel.min
  sliderView.step = sliderModel.step
  sliderView.max = sliderModel.max
  sliderView.value = sliderModel.current

  console.log("DOM page elements initialised")
}

export default setupHtmlPageElts
