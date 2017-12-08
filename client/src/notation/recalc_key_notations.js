import setFractUsingPowerMultiply from "./set_fract_using_power_multiply"
import fractToNotation from "./fract_to_notation"

const recalcKeyNotations = (state, key) => {
  const keyTransposes = key.transposes
  // Start fractAbs again from base frequency (Not yet correct value.)
  keyTransposes.fractAbs = Object.assign({}, state.freqs.current.fractCentralAbs)
  // Multiply it by the key's relative factor. (Now correct value.)
  setFractUsingPowerMultiply(keyTransposes.fractAbs, keyTransposes.fractRel)
  // Calculate suitable notation for the key
  keyTransposes.notation = fractToNotation(state, keyTransposes.fractAbs)
}

export default recalcKeyNotations
