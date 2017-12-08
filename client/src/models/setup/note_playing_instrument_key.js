import instrumentKeyPress from "../../controllers/keys/instrument_key_press"
import instrumentKeyRelease from "../../controllers/keys/instrument_key_release"

import reduceFraction from "../../maths/reduce_fraction"
import fractionToFract from "../../notation/fraction_to_fract"
import addCommasForFract from "../../notation/add_commas_for_fract"
import recalcKeyNotations from "../../notation/recalc_key_notations"
import freqToRGBA from "../../calculations/freq_to_rgba"

const allowKeyActivation = (state, key) => {
  const stateFreq = state.freq
  const minFreq = stateFreq.decimalCentreMin
  const maxFreq = stateFreq.decimalCentreMax
  const currentFreq = stateFreq.decimalCentreCurrent
  const newFreq = currentFreq * key.transposes.decimalCentreCurrent
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
  keyTransposes.decimalCentreCurrent = num / denom
  keyTransposes.textFraction = num + "/" + denom
  keyTransposes.complexity = num * denom
  keyTransposes.fractRel = fractionToFract(num, denom)
  addCommasForFract(state, keyTransposes.fractRel)
  recalcKeyNotations(state, key)

  // Redefine anchor radius of transposing keys in terms of
  // their musical importance, which means low complexity
  const c = 10
  key.coords.model.anchor.r = 7.5 + 4 * c * (1 / (c + keyTransposes.complexity))

}

const defaultNextFreqRel = (state, key) => {
  // Things like bounding by min and max are done here.
  const keyTransposes = key.transposes
  const keyFreq = keyTransposes.decimalCentreCurrent
  const baseFreqHz = state.param.baseFrequencyHz
  const instrumentFreq = state.freq.decimalCentreCurrent
  const maxFreq = state.freq.decimalCentreMax
  const minFreq = state.freq.decimalCentreMin
  let actualNextFreq = keyFreq * instrumentFreq
  actualNextFreq = Math.min(maxFreq, actualNextFreq)
  actualNextFreq = Math.max(minFreq, actualNextFreq)
  return actualNextFreq
}

const defaultNextFreqAbsHz = (state, key) => {
  const baseFreqHz = state.param.baseFrequencyHz
  const nextFreqRel = key.getNextFreqRel(state, key)
  return baseFreqHz * nextFreqRel
}

const defaultFillStyle = (state, key) => {
  if (key.getAllowActivation(state, key)) {
    const contrast = state.slider.colourContrast.getFraction()
    return freqToRGBA(key.getNextFreqRel(state, key), 0.8, contrast)
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
  return 4 * (2 / key.transposes.decimalCentreCurrent)
}

const defaultTextColour = (state, key) => {
  // return 'rgba(30, 0, 30, 0.95)'
  // Need maximum clarity on the keys!
  return 'rgba(0, 0, 0, 1)'
}

const defaultFontHeight = (state, key) => {
  return 10
}

const defaultFontStyle = (state, key) => {
  const fontHeight = defaultFontHeight(state, key)
  return `${fontHeight}px sans-serif`
}

const defaultLabelArray = (state, key) => {
  const buttonTextArray = [key.symbol || key.keyboardCode]
  const freq = key.getNextFreqAbsHz(state, key)
  if (key.getAllowActivation(state, key)) {
    const freqText = freq.toFixed(2) + "Hz"
    buttonTextArray.push(freqText)
    buttonTextArray.push(key.transposes.textFract)
    buttonTextArray.push(key.transposes.textNotation)
  }
  buttonTextArray.push("\u00d7 " + key.transposes.textFraction) // Multiplication symbol
  return buttonTextArray
}

const setupNotePlayingInstrumentKey = (state, key, options) => {

  const inputFraction = options.fraction
  const inputNum = inputFraction.num
  const inputDenom = inputFraction.denom

  key.getAllowActivation = allowKeyActivation
  key.runOnPress = instrumentKeyPress
  key.runOnRelease = instrumentKeyRelease

  key.getNextFreqRel = defaultNextFreqRel
  key.getNextFreqAbsHz = defaultNextFreqAbsHz

  key.getFillStyle = defaultFillStyle
  key.getStrokeStyle = defaultStrokeStyle
  key.getLineWidth = defaultLineWidth
  key.getTextColour = defaultTextColour
  key.getFontHeight = defaultFontHeight
  key.getFontStyle = defaultFontStyle
  key.getLabelArray = defaultLabelArray

  key.transposes = {}
  const keyTransposes = key.transposes
  keyTransposes.set = setNumDenom
  // This function carries out all checking of input
  // and setting of various cached variables
  // and invalidating the global prime list
  keyTransposes.set(state, key, inputNum, inputDenom)

}

export default setupNotePlayingInstrumentKey
