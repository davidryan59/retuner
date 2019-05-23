import clearCanvas from './clearCanvas'
import drawInstrumentKeys from './drawInstrumentKeys'

const drawCanvas = state => {
  clearCanvas(state)
  // Currently no other background to draw
  drawInstrumentKeys(state)
}

export default drawCanvas
