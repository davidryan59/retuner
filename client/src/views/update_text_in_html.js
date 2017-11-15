const updateTextInHtml = (state) => {
  // Only update this every 10 frames
  if (state.control.loopCount % 10 === 0) {
    const pageElts = state.pageElts
    const stateTiming = state.control.timing
    pageElts.totalTimeS.innerText = Math.round(stateTiming.totalTimeS*1000)/1000
    pageElts.renderTimeMS.innerText = Math.round(stateTiming.renderTimeMS*1000)/1000
  }
}

export default updateTextInHtml
