import extractAllPrimeFactors from './extract_all_prime_factors'

const checkPrimeInfo = (state) => {

  if (!state.prime.upToDate) {
    const fractionFactorArray = []

    for (const key of state.key.array) {
      if (key.transposes) {
        if (key.transposes.factors) {
          fractionFactorArray.push(key.transposes.factors)
        }
      }
    }

    const primeArray = extractAllPrimeFactors(fractionFactorArray)
    state.prime.array = primeArray
    state.prime.upToDate = true
    console.log("Prime info has been updated")
  }

}

export default checkPrimeInfo
