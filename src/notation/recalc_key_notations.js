import setFractUsingPowerMultiply from "./set_fract_using_power_multiply"
import absLogComplexity from "./abs_log_complexity"
import fractToNumDenom from "./fract_to_num_denom"
import fractToNotation from "./fract_to_notation"
import fractToFreq from "./fract_to_freq"
import getStateBoundedFrequencyModOctaves from "../calcs/getStateBoundedFrequencyModOctaves"

const getFractText = (key) => {
  const fractObj = key.transposes.fractAbs
  if (key.transposes.complexityAbsLog < 20) {
    // Return numeric numerator and denominator up to 3 digits.
    // 1000 ~ 2^10, so use 20 = 10 + 10 here
    let num = 1
    let denom = 1
    for (const key of Object.keys(fractObj)) {
      const prime = parseInt(key)
      const exponent = fractObj[key]
      num *= prime ** Math.max(0, exponent)
      denom *= prime ** Math.max(0, -exponent)
    }
    return `${num}/${denom}`
  } else {
    // Return numerator and denominator split into powers
    let [numText, denomText] = fractToNumDenom(fractObj)
    numText = (!numText) ? "1" : numText
    denomText = (!denomText) ? "1" : denomText
    return `${numText} / ${denomText}`
  }
}

const recalcKeyNotations = (state, key) => {
  const keyTransposes = key.transposes
  // Start fractAbs again from base frequency (Not yet correct value.)
  keyTransposes.fractAbs = Object.assign({}, state.freq.fractCentre)
  // Multiply it by the key's relative factor. (Now correct value.)
  setFractUsingPowerMultiply(keyTransposes.fractAbs, keyTransposes.fractRel)

  // Need to check if absolute frequency goes outside of instrument bounds
  // and correct the abs fract before using it further
  const theFreq = fractToFreq(keyTransposes.fractAbs)
  const theCheckedFreq = getStateBoundedFrequencyModOctaves(state, theFreq)
  if (theFreq !== theCheckedFreq) {
    const exp2 = Math.round(Math.log2(theCheckedFreq/theFreq))
    setFractUsingPowerMultiply(keyTransposes.fractAbs, {2:exp2})
  }

  keyTransposes.complexityAbsLog = absLogComplexity(keyTransposes.fractAbs)
  // Calculate suitable notation for the key
  keyTransposes.textFract = getFractText(key)
  keyTransposes.textNotation = fractToNotation(state, keyTransposes.fractAbs)
}

export default recalcKeyNotations
