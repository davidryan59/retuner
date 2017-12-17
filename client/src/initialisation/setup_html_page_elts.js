const setupHtmlPageElts = (state) => {

  const pageElts = state.pageElt

  pageElts.topText = document.querySelector("#top-text")
  pageElts.canvas = document.querySelector("#main-canvas")
  pageElts.versionNumber = document.querySelector("#version-number")
  pageElts.versionDate = document.querySelector("#version-date")
  pageElts.timeTotalS = document.querySelector("#total-time-s")
  pageElts.timeRenderMinMS = document.querySelector("#render-time-min-ms")
  pageElts.timeRenderMaxMS = document.querySelector("#render-time-max-ms")

  // pageElts.sliders = {}
  // const pageEltSliders = pageElts.sliders
  // 
  // // Setup sliders. Use 2 temporary variables, which will reassign
  // let sliderView = null
  // let sliderModel = null
  //
  // // Setup the volume slider
  // pageEltSliders.volume = {}
  // pageEltSliders.volume.slider = document.querySelector("#slider-vol")
  // pageEltSliders.volume.display = document.querySelector("#display-vol")
  //
  // sliderView = pageEltSliders.volume.slider
  // sliderModel = state.slider.volume
  //
  // sliderView.min = sliderModel.min
  // sliderView.step = sliderModel.step
  // sliderView.max = sliderModel.max
  // sliderView.value = sliderModel.getValue()
  //
  // // Setup the key contrast slider
  // pageEltSliders.colourContrast = {}
  // pageEltSliders.colourContrast.slider = document.querySelector("#slider-contrast")
  // pageEltSliders.colourContrast.display = document.querySelector("#display-contrast")
  //
  // sliderView = pageEltSliders.colourContrast.slider
  // sliderModel = state.slider.colourContrast
  //
  // sliderView.min = sliderModel.min
  // sliderView.step = sliderModel.step
  // sliderView.max = sliderModel.max
  // sliderView.value = sliderModel.getValue()
  //
  // // Setup the speed slider
  // pageEltSliders.bpm = {}
  // pageEltSliders.bpm.slider = document.querySelector("#slider-bpm")
  // pageEltSliders.bpm.display = document.querySelector("#display-bpm")
  //
  // sliderView = pageEltSliders.bpm.slider
  // sliderModel = state.slider.bpm
  //
  // sliderView.min = sliderModel.min
  // sliderView.step = sliderModel.step
  // sliderView.max = sliderModel.max
  // sliderView.value = sliderModel.getValue()
  //
  // // Setup the key spacing slider
  // pageEltSliders.keySize = {}
  // pageEltSliders.keySize.slider = document.querySelector("#slider-spacing")
  // pageEltSliders.keySize.display = document.querySelector("#display-spacing")
  //
  // sliderView = pageEltSliders.keySize.slider
  // sliderModel = state.slider.keySize
  //
  // sliderView.min = sliderModel.min
  // sliderView.step = sliderModel.step
  // sliderView.max = sliderModel.max
  // sliderView.value = sliderModel.getValue()

  console.log("DOM page elements initialised")
}

export default setupHtmlPageElts
