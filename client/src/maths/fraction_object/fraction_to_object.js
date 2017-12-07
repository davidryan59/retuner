import primeList from './primes_to_126.json'
// const primeList = require('./primes_to_126.json')  // Node Testing
const maxIndex = primeList.length

const increment = (object, key, increment) => {
  if (object.key) {
    object[key] += increment
    // Could check here if value is zero,
    // and delete it if so?
  } else {
    object[key] = increment
  }
}

const fractionToObject = (num, denom) => {
  // Output object with prime: exponent pairsarray of [prime, exponent]
  // e.g. 21/20 => {2: -2, 3: 1, 5: -1, 7: 1}
  // and 42/40 will have the same output. Common factors cancel each other.
  // Currently num, denom are limited to < 127 * 127 - 1 = 16128
  // Since in this app it is anticipated that numerator
  // and denominator will be smaller than this, its OK!
  const factorObject = {}
  let residualNum = Math.round(Math.abs(num))
  let residualDenom = Math.round(Math.abs(denom))
  let primeIndex = 0
  let currentPrimeHeight = 0
  let prime = null
  while (residualNum * residualDenom > 1 && primeIndex < maxIndex) {
    prime = primeList[primeIndex]
    let primeUsed = false
    if (residualNum % prime === 0) {
      currentPrimeHeight++
      residualNum /= prime
      primeUsed = true
    }
    if (residualDenom % prime === 0) {
      currentPrimeHeight--
      residualDenom /= prime
      primeUsed = true
    }
    if (!primeUsed) {
      if (!(currentPrimeHeight===0)) {
        increment(factorObject, prime, currentPrimeHeight)
      }
      currentPrimeHeight = 0
      primeIndex++
    }
  }
  if (!(currentPrimeHeight===0)) {
    // Last iteration, while loop exits before doing this
    // Repeat it here.
    increment(factorObject, prime, currentPrimeHeight)
  }
  if (residualNum > 1) {
    increment(factorObject, residualNum, 1)
  }
  if (residualDenom > 1) {
    increment(factorObject, residualDenom, -1)
  }
  return factorObject
}

// // Node Testing
// const num = 10
// const den = 14
// const result = fractionToObject(num, den)
// console.log(`${num}/${den} =>`)
// console.log(result)

export default fractionToObject
