import setupCurrentVersion from '../_params/current_version'
import setupImportantParameters from '../_params/important_parameters'

import setupControl from './level_2/setup_control'
import setupDecibels from './level_2/setup_decibels'
import setupKeyColourContrast from './level_2/setup_key_colour_contrast'
import setupKeySpacing from './level_2/setup_key_spacing'
import setupHtmlPageElts from './level_2/setup_html_page_elts'
import setupGraphicsContext from './level_2/setup_graphics_context'
import setupInstrumentKeys from './level_2/setup_instrument_keys'
import setupInstrumentKeysMore from './level_2/setup_instrument_keys_more'
import setupFrequencies from './level_2/setup_frequencies'
import setupRecording from './level_2/setup_recording'
import setupWaveform from './level_2/setup_waveform'
import setupAudioContext from './level_2/setup_audio_context'

import windowResizeHandler from '../views/window_resize_handler'


const initialiseState = (state) => {

  // Setup version info
  // Held in first src subdir
  // for ease of access
  setupCurrentVersion(state)
  setupImportantParameters(state)

  // Setup state
  setupControl(state)
  setupDecibels(state)
  setupKeyColourContrast(state)
  setupKeySpacing(state)
  setupHtmlPageElts(state)
  setupGraphicsContext(state)
  setupInstrumentKeys(state)
  console.dir(state.key.array[16])       // Log the 'V' key
  setupInstrumentKeysMore(state)
  setupFrequencies(state)
  setupRecording(state)
  setupWaveform(state)
  setupAudioContext(state)

  // Setup window
  windowResizeHandler(state)

  console.log("State initialisation complete:")
  console.dir(state)
}

export default initialiseState
