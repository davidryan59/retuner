import extractAllPrimeFactors from './extract_all_prime_factors'
import commaRcnDr from '../maths/commas/rcn_dr'

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
    console.log(`Primes now ${primeArray}`)

    const commaObject = {}
    for (const prime of primeArray) {
      if (prime > 3) {
        const [a, b] = commaRcnDr(prime)
        const num = prime * (2 ** Math.max(0, a)) * (3 ** Math.max(0, b))
        const denom = (2 ** Math.max(0, -a)) * (3 ** Math.max(0, -b))
        commaObject[prime] = [num, denom, prime, a, b]
      }
    }
    state.prime.commas = commaObject

    state.prime.upToDate = true
  }

}

export default checkPrimeInfo
