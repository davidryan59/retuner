const recordRenderTime = (state, timeLoopStart) => {
  const timeRenderEnd = window.performance.now()
  const renderTimeMS = timeRenderEnd - timeLoopStart
  state.control.timing.timeRenderMinMS = Math.min(
    renderTimeMS,
    state.control.timing.timeRenderMinMS
  )
  state.control.timing.timeRenderMaxMS = Math.max(
    renderTimeMS,
    state.control.timing.timeRenderMaxMS
  )
}

export default recordRenderTime
