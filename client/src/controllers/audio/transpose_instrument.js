import multiplyFractionBy from '../../maths/fraction_object/multiply_fraction_by'

const transposeInstrument = (state, key) => {

  const freqFactor = key.transposes.factor
  const fractionObject = key.transposes.factors
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
  multiplyFractionBy(stateFreqs.current.fractionObject, fractionObject)

  // Logging
  const baseFreqHz = state.params.baseFrequencyHz
  console.log(
    "Instrument central frequency changed by", freqTextRelative,
    "from", (baseFreqHz*currentFreq).toFixed(2), "Hz",
    "to", (baseFreqHz*newFreq).toFixed(2), "Hz"
  )
}

export default transposeInstrument
