import getStateBoundedFrequencyModOctaves from '../../calcs/get_state_bounded_frequency_mod_octaves'
import setFractUsingPowerMultiply from '../../notation/set_fract_using_power_multiply'
import recalcAllNotations from '../../notation/recalc_all_notations'

const transposeInstrument = (state, key) => {

  const freqDecimalRel = key.transposes.decimalRel
  const transposingFract = key.transposes.fractRel
  const freqTextRelative = key.transposes.textFraction

  // Get the relevant state object
  const stateFreq = state.freq
  const instrumentFreqDecimalCentre = stateFreq.decimalCentreCurrent
  const newFreq = instrumentFreqDecimalCentre * freqDecimalRel
  const checkedNewFreq = getStateBoundedFrequencyModOctaves(state, newFreq)
  const octaveChange = Math.round(Math.log2(checkedNewFreq/newFreq))

  // Do the change
  stateFreq.decimalCentreCurrent = checkedNewFreq
  setFractUsingPowerMultiply(stateFreq.fractCentre, transposingFract)
  if (octaveChange) {
    // The checked note isn't the same as the note
    // Need to represent this both in the note (checkedNewFreq)
    // and in the prime power representation (.fractCentre)
    setFractUsingPowerMultiply(stateFreq.fractCentre, {2:octaveChange})
  }
  recalcAllNotations(state)

  // Logging
  // const baseFreqHz = state.param.baseFrequencyHz
  const baseFreqHz = state.slider.baseFreq.getValue()
  console.log(
    "Instrument central frequency changed by", freqTextRelative,
    "from", (baseFreqHz * instrumentFreqDecimalCentre).toFixed(2), "Hz",
    "to", (baseFreqHz * checkedNewFreq).toFixed(2), "Hz"
  )
}

export default transposeInstrument
