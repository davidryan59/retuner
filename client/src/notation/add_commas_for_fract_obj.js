import addComma from './add_comma'

const addCommasForFractObj = (state, fractObj) => {
  if (fractObj) {
    for (const key of Object.keys(fractObj)) {
      if (!state.commas[key]) {
        const prime = parseInt(key)
        addComma(state, prime)
      }
    }
  }
}

export default addCommasForFractObj
