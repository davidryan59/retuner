import setupControl from './setup_control'
import setupHtmlPageElts from './setup_html_page_elts'
import setupGraphicsContext from './setup_graphics_context'
import setupInstrumentKeys from './setup_instrument_keys'
import setupFrequencies from './setup_frequencies'
import setupRecording from './setup_recording'
import setupWaveform from './setup_waveform'
import setupDecibels from './setup_decibels'
import setupAudioContext from './setup_audio_context'
import windowResizeHandler from '../views/window_resize_handler'

const initialiseState = (state) => {

  // Setup state
  setupControl(state)
  setupHtmlPageElts(state)
  setupGraphicsContext(state)
  setupInstrumentKeys(state)
  setupFrequencies(state)
  setupRecording(state)
  setupWaveform(state)
  setupDecibels(state)
  setupAudioContext(state)

  // Setup window
  windowResizeHandler(state)

  console.log("State initialisation complete:")
  console.dir(state)
}

export default initialiseState
