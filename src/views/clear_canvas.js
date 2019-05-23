const clearCanvas = (state) => {

  const stateGraphics = state.graphics
  const canvasStats = stateGraphics.canvasInfo

  // Set up clearing canvas

  const context = state.context.graphics

  const canvasLeft = canvasStats.boundLeft
  const canvasRight = canvasStats.boundRight
  const canvasUp = canvasStats.boundUp
  const canvasDown = canvasStats.boundDown

  // Do clearing canvas here
  context.clearRect(
    canvasLeft,
    canvasUp,
    canvasRight - canvasLeft,
    canvasDown - canvasUp
  )

  // // Alternative way to clear canvas
  // context.fillStyle="black";
  // context.fillRect(
  //   canvasLeft,
  //   canvasUp,
  //   canvasRight-canvasLeft,
  //   canvasDown-canvasUp
  // )

}

export default clearCanvas
