import setupVersionInfo from '../_params/version_info'
import setupAppParams from '../_params/app_params'

import setupControl from './level_2/setup_control'
import setupHtmlPageElts from './level_2/setup_html_page_elts'
import setupGraphicsContext from './level_2/setup_graphics_context'
import setupInstrumentKeys from './level_2/setup_instrument_keys'
import setupFrequencies from './level_2/setup_frequencies'
import setupRecording from './level_2/setup_recording'
import setupWaveform from './level_2/setup_waveform'
import setupDecibels from './level_2/setup_decibels'
import setupAudioContext from './level_2/setup_audio_context'

import windowResizeHandler from '../views/window_resize_handler'


const initialiseState = (state) => {

  // Setup version info
  // Held in first src subdir
  // for ease of access
  setupVersionInfo(state)
  setupAppParams(state)

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
