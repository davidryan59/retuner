import extractAllPrimeFactors from './extract_all_prime_factors'
import commaRcnDr from '../maths/commas/comma_rcn_dr'
import fractionToObject from '../maths/fraction_object/fraction_to_object'

// const extractAllPrimeFactors = require('./extract_all_prime_factors')
// const commaRcnDr = require()'../maths/commas/rcn_dr')

const checkPrimeInfo = (state) => {

  if (!state.prime.upToDate) {
    const arrayOfFractionObjects = []

    for (const key of state.key.array) {
      if (key.transposes) {
        if (key.transposes.factors) {
          arrayOfFractionObjects.push(key.transposes.factors)
        }
      }
    }

    const primeArray = extractAllPrimeFactors(arrayOfFractionObjects)
    state.prime.array = primeArray
    console.log(`Primes now ${primeArray}`)

    const commaObject = {}
    for (const prime of primeArray) {
      if (prime > 3) {
        const [a, b] = commaRcnDr(prime)
        const num = prime * (2 ** Math.max(0, a)) * (3 ** Math.max(0, b))
        const denom = (2 ** Math.max(0, -a)) * (3 ** Math.max(0, -b))
        const fractObj = fractionToObject(num, denom)
        // commaObject[prime] = [num, denom, prime, a, b]
        commaObject[prime] = fractObj
      }
    }
    state.prime.commas = commaObject

    // Now we have all primes and commas,
    // its possible to update key notations
    for (const key of state.key.array) {
      if (key.transposes) {
        if (!key.transposes.notation) {
          key.transposes.updateNotation(state, key)
        }
      }
    }

    state.prime.upToDate = true
  }

}

export default checkPrimeInfo
