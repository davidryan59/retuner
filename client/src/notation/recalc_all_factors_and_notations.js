import recalcFactorAndNotation from "./recalc_factor_and_notation"

const recalcAllFactorsAndNotations = (state) => {
  for (const key of state.key.array) {
    if (key.transposes) {
      recalcFactorAndNotation(state, key)
    }
  }
}

export default recalcAllFactorsAndNotations
