import setupInstrumentKeys from './setup_instrument_keys'
import setupFrequencies from './setup_frequencies'
import setupWaveform from './setup_waveform'
import setupAmplitudes from './setup_amplitudes'
import setupAudioContext from './setup_audio_context'

const initialiseState = (state) => {

  setupInstrumentKeys(state)
  setupFrequencies(state)
  setupWaveform(state)
  setupAmplitudes(state)
  setupAudioContext(state)

  console.log("State initialisation complete:")
  console.dir(state)
}

export default initialiseState
