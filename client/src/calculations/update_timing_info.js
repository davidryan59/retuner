const updateTimingInfo = (state, timeLoopStart) => {
  const prevLoopStart = state.control.timing.thisLoopStart
  const thisLoopStart = timeLoopStart
  const loopTimeMS = thisLoopStart - prevLoopStart
  state.control.timing.prevLoopStart = prevLoopStart
  state.control.timing.thisLoopStart = thisLoopStart
  state.control.timing.loopTimeMS = loopTimeMS
  state.control.timing.totalTimeS += 0.001 * loopTimeMS
}

export default updateTimingInfo
