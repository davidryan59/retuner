import numToFixedTotalLength from '../calculations/num_to_fixed_total_length'

let drawnVersionNumber = false;

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
  // Do sliders
  let sliderModel = null
  let sliderView = null
  let currentValue = null
  // Volume slider
  sliderModel = state.slider.volume
  sliderView = pageElts.sliders.volume
  if (sliderModel.redraw) {
    currentValue = sliderModel.current
    sliderView.slider.value = currentValue
    sliderView.display.innerText = numToFixedTotalLength(currentValue, 3)
    sliderModel.redraw = false
  }
  // Key colour contrast slider
  sliderModel = state.slider.colourContrast
  sliderView = pageElts.sliders.colourContrast
  if (sliderModel.redraw) {
    currentValue = sliderModel.current
    sliderView.slider.value = currentValue
    sliderView.display.innerText = numToFixedTotalLength(currentValue, 2)
    sliderModel.redraw = false
  }
  // Key spacing slider
  sliderModel = state.slider.keySize
  sliderView = pageElts.sliders.keySize
  if (sliderModel.redraw) {
    currentValue = sliderModel.current
    sliderView.slider.value = currentValue
    sliderView.display.innerText = numToFixedTotalLength(currentValue, 2)
    sliderModel.redraw = false
  }
}

export default updateTextInHtml
