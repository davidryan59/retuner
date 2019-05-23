import setupStateStructure from '../_params/stateStructure'
import setupCurrentVersion from '../_params/currentVersion'
import setupImportantParameters from '../_params/importantParameters'

import setupControl from './setupControl'
import setupTopTexts from './setupTopTexts'
import setupSliders from './setupSliders'
import setupHtmlPageElts from './setupHtmlPageElts'
import setupGraphicsContext from './setupGraphicsContext'
import setupFrequencies from './setupFrequencies'
import setupKeymaps from './setupKeymaps'
import setupInstrumentKeys from './setupInstrumentKeys'
import setupKeyInteractions from './setupKeyInteractions'
import setupDemos from './setupDemos'
import setupWaveform from './setupWaveform'
import setupAudioContext from './setupAudioContext'
import setupMixer from './setupMixer'
import updateSliders from './updateSliders'

import windowResizeHandler from '../views/windowResizeHandler'


const initialiseState = state => {

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
  setupMixer(state)
  updateSliders(state)

  // Setup window
  windowResizeHandler(state)

  console.log("State initialisation complete:")
  console.dir(state)
}

export default initialiseState
