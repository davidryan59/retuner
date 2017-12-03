import numToFixedTotalLength from '../calculations/num_to_fixed_total_length'

let drawnVersionNumber = false;

const updateTextInHtml = (state) => {
  // Only update this every N frames
  const pageElts = state.pageElts
  if (state.control.loopsSinceTimeout % state.params.updateHtmlText === 0) {
    const stateTiming = state.control.timing
    pageElts.totalTimeS.innerText = stateTiming.totalTimeS.toFixed(1)
    pageElts.renderTimeMinMS.innerText = stateTiming.renderTimeMinMS.toFixed(1)
    pageElts.renderTimeMaxMS.innerText = stateTiming.renderTimeMaxMS.toFixed(1)
    stateTiming.renderTimeMinMS = 10000
    stateTiming.renderTimeMaxMS = 0
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
  sliderModel = state.slider.keyColourContrast
  sliderView = pageElts.sliders.contrast
  if (sliderModel.redraw) {
    currentValue = sliderModel.current
    sliderView.slider.value = currentValue
    sliderView.display.innerText = numToFixedTotalLength(currentValue, 2)
    sliderModel.redraw = false
  }
  // Key spacing slider
  sliderModel = state.slider.keySpacing
  sliderView = pageElts.sliders.spacing
  if (sliderModel.redraw) {
    currentValue = sliderModel.current
    sliderView.slider.value = currentValue
    sliderView.display.innerText = numToFixedTotalLength(currentValue, 2)
    sliderModel.redraw = false
  }
}

export default updateTextInHtml
