let drawnVersionNumber = false;

const updateSliderViewFromModel = (sliderView, sliderModel) => {
  if (sliderModel.redraw) {
    sliderView.slider.value = sliderModel.getLinearValue()
    sliderView.display.innerText = sliderModel.getDisplayText()
    sliderModel.redraw = false
  }
}

const updateTextInHtml = (state) => {
  // Only update this every N frames
  const pageElts = state.pageElt
  if (state.control.loopsSinceTimeout % state.param.loopsToUpdateHtmlText === 0) {
    const stateTiming = state.control.timing
    pageElts.timeTotalS.innerText = stateTiming.timeTotalS.toFixed(1)
    pageElts.timeRenderMinMS.innerText = stateTiming.timeRenderMinMS.toFixed(1)
    pageElts.timeRenderMaxMS.innerText = stateTiming.timeRenderMaxMS.toFixed(1)
    stateTiming.timeRenderMinMS = 10000
    stateTiming.timeRenderMaxMS = 0
  }
  if (!drawnVersionNumber) {
    pageElts.versionNumber.innerText = state.version.number
    pageElts.versionDate.innerText = state.version.date
    drawnVersionNumber = true
  }

  // Do top texts. (The +1 and +31, rather than +0 and +30, are to not do it on startup)
  // Offset can be set to specific value to cause a reset of the text below
  const loopOffset = state.text.loopOffset
  const loopsSinceTimeout = state.control.loopsSinceTimeout
  const loopsToUpdate = state.param.loopsToUpdateTopText
  const loopDelay = state.text.loopDelay
  const topTextElt = pageElts.topText
  // Clear it 30 frames before setting it
  if ((loopsSinceTimeout + 1 + loopDelay + loopOffset) % loopsToUpdate === 0) {
    topTextElt.innerHTML = ""
  }
  // Set it later
  if ((loopsSinceTimeout + 1 + loopOffset) % loopsToUpdate === 0) {
    const stateText = state.text
    const array = stateText.array
    const oldIndex = stateText.index
    let newIndex = oldIndex
    let tries = 0
    while (oldIndex === newIndex && tries<20) {
      newIndex = Math.floor(array.length * Math.random())
      tries++
    }
    // console.log(oldIndex, newIndex, tries)
    const newText = array[newIndex]
    stateText.index = newIndex                                               // Random
    // stateText.index = ( stateText.index + 1 ) % stateText.array.length    // Sequential
    topTextElt.innerHTML = newText  // May include <br /> so innerText doesn't work!
  }

  // Do sliders NEW
  const sliderControllerArray = state.controller.sliders
  for (const controller of sliderControllerArray) {
    controller.updateView()
  }

  // // Do sliders OLD
  // const pageSlider = pageElts.sliders    // Views
  // const stateSlider = state.slider       // Models
  // updateSliderViewFromModel(pageSlider.volume, stateSlider.volume)
  // updateSliderViewFromModel(pageSlider.bpm, stateSlider.bpm)
  // updateSliderViewFromModel(pageSlider.colourContrast, stateSlider.colourContrast)
  // updateSliderViewFromModel(pageSlider.keySize, stateSlider.keySize)
}

export default updateTextInHtml
