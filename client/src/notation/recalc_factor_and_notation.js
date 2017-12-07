import multiplyFractionBy from "./multiply_fraction_by"
import fractToNotation from "./fract_to_notation"

const recalcFactorAndNotation = (state, key) => {
  const keyTransposes = key.transposes
  // Start absFactors again from base frequency
  keyTransposes.absFactors = Object.assign({}, state.freqs.current.fractionObject)
  // Multiply it by the key's relative factor
  multiplyFractionBy(keyTransposes.absFactors, keyTransposes.factors)
  // Calculate suitable notation for the key
  keyTransposes.notation = fractToNotation(state, keyTransposes.absFactors)
}

export default recalcFactorAndNotation
