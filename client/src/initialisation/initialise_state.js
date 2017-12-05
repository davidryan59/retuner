import setupCurrentVersion from '../_params/current_version'
import setupImportantParameters from '../_params/important_parameters'

import setupControl from './setup_control'
import setupDecibels from './setup_decibels'
import setupKeyColourContrast from './setup_key_colour_contrast'
import setupKeySpacing from './setup_key_spacing'
import setupHtmlPageElts from './setup_html_page_elts'
import setupGraphicsContext from './setup_graphics_context'
import setupInstrumentKeys from './setup_instrument_keys'
import setupInstrumentKeysMore from './setup_instrument_keys_more'
import setupFrequencies from './setup_frequencies'
import setupRecording from './setup_recording'
import setupWaveform from './setup_waveform'
import setupAudioContext from './setup_audio_context'

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
  console.log("Here is a sample key:")
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
