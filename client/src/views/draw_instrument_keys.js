const drawInstrumentKeys = (state) => {

  const context = state.graphics.context
  const loops = state.control.loopCount
  const canvasHeight = state.graphics.boundDown
  const coordFactor = 5
  const radiusFactor = 4
  // Can also use 'rgba(100, 200, 255, 0.5)'
  // for alpha transparency!
  for (const key of state.keys) {
    if (key.physicsSwitchedOn) {
      const x = key.location.x * coordFactor
      const y = key.location.y * coordFactor
      const r = key.location.r * radiusFactor
      // context.fillStyle = key.getBgColour(state, key)
      context.fillStyle = key.bgColour(state, key)
      context.strokeStyle = 'rgba(20, 20, 20, 0.6)'
      context.lineWidth = 4
      context.beginPath()
      context.arc(x, canvasHeight-y, r, 0, 2*Math.PI);
      context.stroke();
      context.fill()
    }
  }
}

export default drawInstrumentKeys
