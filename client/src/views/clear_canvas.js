const clearCanvas = (state) => {

  // Set up clearing canvas
  const context = state.graphics.context
  const canvasLeft = state.graphics.boundLeft
  const canvasRight = state.graphics.boundRight
  const canvasUp = state.graphics.boundUp
  const canvasDown = state.graphics.boundDown

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
