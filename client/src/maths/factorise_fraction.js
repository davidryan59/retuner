import primeList from './primesTo126.json'
const maxIndex = primeList.length

const factoriseFraction = (num, denom) => {
  // Output array of [prime, exponent]
  // e.g. 21/20 => [[2, -2], [3, 1], [5, -1], [7, 1]]
  // and 42/40 will have the same output. Common factors cancel each other.
  // Currently num, denom are limited to < 127 * 127 - 1 = 16128
  // Since in this app it is anticipated that numerator
  // and denominator will be smaller than this, its OK!
  const factorArray = []
  let residualNum = Math.round(Math.abs(num))
  let residualDenom = Math.round(Math.abs(denom))
  let primeIndex = 0
  let currentPrimeHeight = 0
  let prime = null
  while (residualNum * residualDenom > 1 && primeIndex < maxIndex) {
    console.log(residualNum, residualDenom)
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
        factorArray.push([prime, currentPrimeHeight])
      }
      currentPrimeHeight = 0
      primeIndex++
    }
  }
  if (!(currentPrimeHeight===0)) {
    // Last iteration, while loop exits before doing this
    // Repeat it here.
    factorArray.push([prime, currentPrimeHeight])
  }
  if (residualNum > 1) {
    factorArray.push([residualNum, 1])
  }
  if (residualDenom > 1) {
    factorArray.push([residualDenom, -1])
  }
  return factorArray
}

export default factoriseFraction
