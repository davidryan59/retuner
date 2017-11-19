let drawnVersionNumber = false;

const updateTextInHtml = (state) => {
  // Only update this every 10 frames
  const pageElts = state.pageElts
  if (state.control.loopCount % 20 === 0) {
    const stateTiming = state.control.timing
    pageElts.totalTimeS.innerText = Math.round(stateTiming.totalTimeS*1)/1
    pageElts.renderTimeMS.innerText = Math.round(stateTiming.maxRenderTimeMS*1)/1
    stateTiming.maxRenderTimeMS = 0
  }
  if (!drawnVersionNumber) {
    pageElts.versionNumber.innerText = state.versionNumber
    drawnVersionNumber = true
  }
}

export default updateTextInHtml
