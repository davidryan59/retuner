import setFractUsingPowerMultiply from "./set_fract_using_power_multiply"
import fractToNumDenom from "./fract_to_num_denom"
import fractToNotation from "./fract_to_notation"

const getFractText = (fractObj) => {
  let [numText, denomText] = fractToNumDenom(fractObj)
  numText = (!numText) ? "1" : numText
  denomText = (!denomText) ? "1" : denomText
  return `${numText} / ${denomText}`
}

const recalcKeyNotations = (state, key) => {
  const keyTransposes = key.transposes
  // Start fractAbs again from base frequency (Not yet correct value.)
  keyTransposes.fractAbs = Object.assign({}, state.freq.fractCentre)
  // Multiply it by the key's relative factor. (Now correct value.)
  setFractUsingPowerMultiply(keyTransposes.fractAbs, keyTransposes.fractRel)
  // Calculate suitable notation for the key
  keyTransposes.textFract = getFractText(keyTransposes.fractAbs)
  keyTransposes.textNotation = fractToNotation(state, keyTransposes.fractAbs)
}

export default recalcKeyNotations
