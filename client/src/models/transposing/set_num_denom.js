import reduceFraction from "../../maths/reduce_fraction"
import fractionToFract from "../../notation/fraction_to_fract"
import addCommasForFract from "../../notation/add_commas_for_fract"
import recalcKeyNotations from "../../notation/recalc_key_notations"

const setNumDenom = (state, key, inputNum, inputDenom) => {

  // Need to call this method to change num, denom
  // It takes care of everything which should be updated.
  const [num, denom] = reduceFraction(inputNum, inputDenom)
  const keyTransposes = key.transposes
  keyTransposes.num = num
  keyTransposes.denom = denom
  keyTransposes.decimalCentreCurrent = num / denom
  keyTransposes.textFraction = num + "/" + denom
  keyTransposes.complexityRel = num * denom
  keyTransposes.fractRel = fractionToFract(num, denom)
  addCommasForFract(state, keyTransposes.fractRel)
  recalcKeyNotations(state, key)

  // Redefine anchor radius of transposing keys in terms of
  // their musical importance, which means low complexity
  const c = 10
  key.coords.model.anchor.r = 7.5 + 4 * c * (1 / (c + keyTransposes.complexityRel))

}

export default setNumDenom
