import addCommaForPrime from './add_comma_for_prime'

const addCommasForFract = (state, fractObj) => {
  if (fractObj) {
    for (const key of Object.keys(fractObj)) {
      if (!state.commas[key]) {
        const prime = parseInt(key)
        addCommaForPrime(state, prime)
      }
    }
  }
}

export default addCommasForFract
