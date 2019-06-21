import Peo from 'peo'

import getStateBoundedFrequencyModOctaves from '../../calcs/getStateBoundedFrequencyModOctaves'


const transposeInstrument = (state, key) => {
  const stateFreq = state.freq
  const keyJi = key.transposes.ji

  const freqDecimalRel = keyJi.ratio()
  const freqTextRelative = keyJi.ratioFractionText()
  const peoTransposing = keyJi.ratioPeo()

  const instrumentFreqDecimalCentre = stateFreq.decimalCentreCurrent
  const newFreq = instrumentFreqDecimalCentre * freqDecimalRel
  const checkedNewFreq = getStateBoundedFrequencyModOctaves(state, newFreq)
  const octaveChange = Math.round(Math.log2(checkedNewFreq / newFreq))

  let newPeo = stateFreq.peoCentre.mult(peoTransposing)
  if (octaveChange) newPeo = newPeo.mult(new Peo({2:octaveChange}))
  stateFreq.peoCentre = newPeo
  stateFreq.decimalCentreCurrent = checkedNewFreq

  // Logging
  const baseFreqHz = state.slider.baseFreq.getValue()
  console.log(
    "Instrument central frequency changed by", freqTextRelative,
    "from", (baseFreqHz * instrumentFreqDecimalCentre).toFixed(2), "Hz",
    "to", (baseFreqHz * checkedNewFreq).toFixed(2), "Hz"
  )
}

export default transposeInstrument
