import recalcKeyNotations from "./recalc_key_notations"

const recalcAllNotations = (state) => {
  for (const key of state.key.array) {
    if (key.transposes) {
      recalcKeyNotations(state, key)
    }
  }
}

export default recalcAllNotations
