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
  if (state.dB.updated) {
    const currentDB = state.dB.current
    pageElts.sliders.volume.slider.value = currentDB
    pageElts.sliders.volume.display.innerText = currentDB
    state.dB.updated = false
  }
}

export default updateTextInHtml
