import instrumentKeyPress from "../../controllers/keys/instrument_key_press"
import instrumentKeyRelease from "../../controllers/keys/instrument_key_release"

import reduceFraction from "../../maths/reduce_fraction"
import fractionToObject from "../../notation/fraction_to_object"
import addCommasForFractObj from "../../notation/add_commas_for_fract_obj"
import recalcFactorAndNotation from "../../notation/recalc_factor_and_notation"
import freqToRGBA from "../../calculations/freq_to_rgba"

const allowKeyActivation = (state, key) => {
  const stateFreq = state.freqs
  const minFreq = stateFreq.minFreq
  const maxFreq = stateFreq.maxFreq
  const currentFreq = stateFreq.current.freq
  const newFreq = currentFreq * key.transposes.factor
  if (newFreq < minFreq) {
    return false
  }
  if (maxFreq < newFreq) {
    return false
  }
  return true
}

const setNumDenom = (state, key, inputNum, inputDenom) => {
  const [num, denom] = reduceFraction(inputNum, inputDenom)
  const keyTransposes = key.transposes
  keyTransposes.num = num
  keyTransposes.denom = denom
  keyTransposes.factor = num / denom
  keyTransposes.text = num + "/" + denom
  keyTransposes.complexity = num * denom
  keyTransposes.factors = fractionToObject(num, denom)
  addCommasForFractObj(state, keyTransposes.factors)
  recalcFactorAndNotation(state, key)

  // Redefine anchor radius of transposing keys in terms of
  // their musical importance, which means low complexity
  const c = 10
  key.coords.model.anchor.r = 7.5 + 4 * c * (1 / (c + keyTransposes.complexity))

}

const defaultNextFreqRel = (state, key) => {
  // Things like bounding by min and max are done here.
  const keyTransposes = key.transposes
  const keyFreq = keyTransposes.factor
  const baseFreqHz = state.params.baseFrequencyHz
  const instrumentFreq = state.freqs.current.freq
  const maxFreq = state.freqs.maxFreq
  const minFreq = state.freqs.minFreq
  let actualNextFreq = keyFreq * instrumentFreq
  actualNextFreq = Math.min(maxFreq, actualNextFreq)
  actualNextFreq = Math.max(minFreq, actualNextFreq)
  return actualNextFreq
}

const defaultNextFreqAbsHz = (state, key) => {
  const baseFreqHz = state.params.baseFrequencyHz
  const nextFreqRel = key.nextFreqRel(state, key)
  return baseFreqHz * nextFreqRel
}

const defaultFillStyle = (state, key) => {
  if (key.activates(state, key)) {
    const contrast = state.slider.keyColourContrast.getFraction()
    return freqToRGBA(key.nextFreqRel(state, key), 0.8, contrast)
  } else {
    return 'rgba(220, 220, 220, 0.25)'
  }
}

const defaultStrokeStyle = (state, key) => {
  if (key.keyState) {
    const id = key._id
    if (state.key.tempPressed && id === state.key.tempPressed._id) {
      return 'rgba(20, 190, 20, 0.9)'
    } else if (state.key.tempMoused && id === state.key.tempMoused._id) {
      return 'rgba(200, 200, 0, 0.9)'
    } else {
      return 'rgba(170, 20, 20, 0.9)'
    }
  } else {
    return 'rgba(20, 20, 120, 0.7)'
  }
}

const defaultLineWidth = (state, key) => {
  return 4 * (2 / key.transposes.factor)
}

const defaultTextColour = (state, key) => {
  return 'rgba(30, 0, 30, 0.95)'
}

const defaultFontHeight = (state, key) => {
  return 10
}

const defaultFont = (state, key) => {
  const fontHeight = defaultFontHeight(state, key)
  return `${fontHeight}px sans-serif`
}

const defaultLabelArray = (state, key) => {
  const buttonTextArray = [key.symbol || key.keyboardCode]
  const freq = key.nextFreqAbsHz(state, key)
  if (key.activates(state, key)) {
    const freqText = freq.toFixed(2) + "Hz"
    buttonTextArray.push(freqText)
    buttonTextArray.push(key.transposes.notation)
  }
  buttonTextArray.push("\u00d7 " + key.transposes.text) // Multiplication symbol
  return buttonTextArray
}

const setupNotePlayingInstrumentKey = (state, key, options) => {

  const inputFraction = options.fraction
  const inputNum = inputFraction.num
  const inputDenom = inputFraction.denom

  key.activates = allowKeyActivation
  key.runOnPress = instrumentKeyPress
  key.runOnRelease = instrumentKeyRelease

  key.nextFreqRel = defaultNextFreqRel
  key.nextFreqAbsHz = defaultNextFreqAbsHz

  key.fillStyle = defaultFillStyle
  key.strokeStyle = defaultStrokeStyle
  key.lineWidth = defaultLineWidth
  key.textColour = defaultTextColour
  key.fontHeight = defaultFontHeight
  key.font = defaultFont
  key.labelArray = defaultLabelArray

  key.transposes = {}
  const keyTransposes = key.transposes
  keyTransposes.set = setNumDenom
  // This function carries out all checking of input
  // and setting of various cached variables
  // and invalidating the global prime list
  keyTransposes.set(state, key, inputNum, inputDenom)

}

export default setupNotePlayingInstrumentKey
