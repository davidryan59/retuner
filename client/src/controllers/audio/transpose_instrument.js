import setFractUsingPowerMultiply from '../../notation/set_fract_using_power_multiply'
import recalcAllNotations from '../../notation/recalc_all_notations'

const transposeInstrument = (state, key) => {

  const freqDecimalRel = key.transposes.decimalRel
  const transposingFract = key.transposes.fractRel
  const freqTextRelative = key.transposes.textFraction

  // Get the relevant state object
  const stateFreq = state.freq
  // Retrieve relevant state variables
  const minFreq = stateFreq.decimalCentreMin
  const instrumentFreqDecimalCentre = stateFreq.decimalCentreCurrent
  const maxFreq = stateFreq.decimalCentreMax
  // Calculate the new frequency, bounded
  let newFreq = instrumentFreqDecimalCentre * freqDecimalRel
  if (newFreq < minFreq) {
    newFreq = minFreq
  }
  if (maxFreq < newFreq) {
    newFreq = maxFreq
  }
  // Do the change
  stateFreq.decimalCentreCurrent = newFreq
  setFractUsingPowerMultiply(stateFreq.fractCentre, transposingFract)
  recalcAllNotations(state)

  // Logging
  const baseFreqHz = state.param.baseFrequencyHz
  console.log(
    "Instrument central frequency changed by", freqTextRelative,
    "from", (baseFreqHz * instrumentFreqDecimalCentre).toFixed(2), "Hz",
    "to", (baseFreqHz * newFreq).toFixed(2), "Hz"
  )
}

export default transposeInstrument
