import clearCanvas from './clear_canvas'
import drawBackground from './draw_background'
import drawInstrumentKeys from './draw_instrument_keys'

const drawCanvas = (state) => {

  clearCanvas(state)
  drawBackground(state)
  drawInstrumentKeys(state)

}

export default drawCanvas
