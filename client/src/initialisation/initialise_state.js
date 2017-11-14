import setupInstrumentKeys from './setup_instrument_keys'
import setupFrequencies from './setup_frequencies'
import setupWaveform from './setup_waveform'
import setupDecibels from './setup_decibels'
import setupAudioContext from './setup_audio_context'

const initialiseState = (state) => {

  setupInstrumentKeys(state)
  setupFrequencies(state)
  setupWaveform(state)
  setupDecibels(state)
  setupAudioContext(state)

  console.log("State initialisation complete:")
  console.dir(state)
}

export default initialiseState
