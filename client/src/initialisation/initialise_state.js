import setupControl from './setup_control'
import setupHtmlPageElts from './setup_html_page_elts'
import setupGraphicsContext from './setup_graphics_context'
import setupInstrumentKeys from './setup_instrument_keys'
import setupFrequencies from './setup_frequencies'
import setupWaveform from './setup_waveform'
import setupDecibels from './setup_decibels'
import setupAudioContext from './setup_audio_context'

const initialiseState = (state) => {

  setupControl(state)
  setupHtmlPageElts(state)
  setupGraphicsContext(state)
  setupInstrumentKeys(state)
  setupFrequencies(state)
  setupWaveform(state)
  setupDecibels(state)
  setupAudioContext(state)

  console.log("State initialisation complete:")
  console.dir(state)
}

export default initialiseState
