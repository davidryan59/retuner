import setupStateStructure from '../_params/state_structure'
import setupCurrentVersion from '../_params/current_version'
import setupImportantParameters from '../_params/important_parameters'

import setupControl from './setup_control'
import setupTopTexts from './setup_top_texts'
import setupSliders from './setup_sliders'
import setupHtmlPageElts from './setup_html_page_elts'
import setupGraphicsContext from './setup_graphics_context'
import setupFrequencies from './setup_frequencies'
import setupKeymaps from './setup_keymaps'
import setupInstrumentKeys from './setup_instrument_keys'
import setupKeyInteractions from './setup_key_interactions'
import setupDemos from './setup_demos'
import setupWaveform from './setup_waveform'
import setupAudioContext from './setup_audio_context'

import windowResizeHandler from '../views/window_resize_handler'


const initialiseState = (state) => {

  setupStateStructure(state)
  setupCurrentVersion(state)
  setupImportantParameters(state)

  setupControl(state)
  setupTopTexts(state)
  setupSliders(state)
  setupHtmlPageElts(state)
  setupGraphicsContext(state)
  setupFrequencies(state)
  setupKeymaps(state)
  setupInstrumentKeys(state)
  console.log("Here is a sample key:")
  console.dir(state.key.array[16])       // Log the 'V' key
  setupKeyInteractions(state)
  setupDemos(state)
  setupWaveform(state)
  setupAudioContext(state)

  // Setup window
  windowResizeHandler(state)

  console.log("State initialisation complete:")
  console.dir(state)
}

export default initialiseState
