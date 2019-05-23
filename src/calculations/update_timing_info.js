const updateTimingInfo = (state, timeLoopStart) => {
  const prevLoopStart = state.control.timing.loopStartThis
  const thisLoopStart = timeLoopStart
  const timeBetweenLoopsMS = thisLoopStart - prevLoopStart
  state.control.timing.loopStartPrev = prevLoopStart
  state.control.timing.loopStartThis = thisLoopStart
  state.control.timing.timeLoopMS = timeBetweenLoopsMS
  state.control.timing.timeTotalS += 0.001 * timeBetweenLoopsMS
}

export default updateTimingInfo
