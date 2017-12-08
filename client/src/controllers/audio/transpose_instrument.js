import setFractUsingPowerMultiply from '../../notation/set_fract_using_power_multiply'
import recalcAllNotations from '../../notation/recalc_all_notations'

const transposeInstrument = (state, key) => {

  const freqFactor = key.transposes.factor
  const transposingFract = key.transposes.fractRel
  const freqTextRelative = key.transposes.text

  // Get the relevant state object
  const stateFreqs = state.freqs
  // Retrieve relevant state variables
  const minFreq = stateFreqs.minFreq
  const currentFreq = stateFreqs.current.freq
  const maxFreq = stateFreqs.maxFreq
  // Calculate the new frequency, bounded
  let newFreq = currentFreq * freqFactor
  if (newFreq < minFreq) {
    newFreq = minFreq
  }
  if (maxFreq < newFreq) {
    newFreq = maxFreq
  }
  // Do the change
  stateFreqs.current.freq = newFreq
  setFractUsingPowerMultiply(stateFreqs.current.fractCentralAbs, transposingFract)
  recalcAllNotations(state)

  // Logging
  const baseFreqHz = state.params.baseFrequencyHz
  console.log(
    "Instrument central frequency changed by", freqTextRelative,
    "from", (baseFreqHz*currentFreq).toFixed(2), "Hz",
    "to", (baseFreqHz*newFreq).toFixed(2), "Hz"
  )
}

export default transposeInstrument
