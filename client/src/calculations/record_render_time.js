const recordRenderTime = (state, timeLoopStart) => {
  const timeRenderEnd = window.performance.now()
  const renderTimeMS = timeRenderEnd - timeLoopStart
  state.control.timing.renderTimeMinMS = Math.min(
    renderTimeMS,
    state.control.timing.renderTimeMinMS
  )
  state.control.timing.renderTimeMaxMS = Math.max(
    renderTimeMS,
    state.control.timing.renderTimeMaxMS
  )
}

export default recordRenderTime
