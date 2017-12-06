import extractAllPrimeFactors from './extract_all_prime_factors'

const findPrimesOnInstrumentKeys = (state) => {

  const fractionFactorArray = []

  for (const key of state.key.array) {
    if (key.transposes) {
      if (key.transposes.factors) {
        fractionFactorArray.push(key.transposes.factors)
      }
    }
  }

  const primeArray = extractAllPrimeFactors(fractionFactorArray)

  state.primes = primeArray

}

export default findPrimesOnInstrumentKeys
