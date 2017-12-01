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
  let source = null
  let sliderObj = null
  let currentValue = null
  // Volume slider
  source = state.dB
  sliderObj = pageElts.sliders.volume
  if (source.updated) {
    currentValue = source.current
    sliderObj.slider.value = currentValue
    sliderObj.display.innerText = numToFixedTotalLength(currentValue, 3)
    source.updated = false
  }
  // Key colour contrast slider
  source = state.keyColourContrast
  sliderObj = pageElts.sliders.contrast
  if (source.updated) {
    currentValue = source.current
    sliderObj.slider.value = currentValue
    sliderObj.display.innerText = numToFixedTotalLength(currentValue, 2)
    source.updated = false
  }
  // Key spacing slider
  source = state.keySpacing
  sliderObj = pageElts.sliders.spacing
  if (source.updated) {
    currentValue = source.current
    sliderObj.slider.value = currentValue
    sliderObj.display.innerText = numToFixedTotalLength(currentValue, 2)
    source.updated = false
  }
}

export default updateTextInHtml
