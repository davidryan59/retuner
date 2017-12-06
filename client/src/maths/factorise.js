import primeList from './primesTo126.json'
const maxIndex = primeList.length

const factorise = (x) => {
  // Currently x is limited to < 127 * 127 - 1 = 16128
  // Since in this app it is anticipated that numerator
  // and denominator will be smaller than this, its OK!
  const factorArray = []
  let res = Math.round(Math.abs(x))
  let primeIndex = 0
  while (res > 1 && primeIndex < maxIndex) {
    const prime = primeList[primeIndex]
    if (res % prime === 0) {
      factorArray.push(prime)
      res /= prime
    } else {
      primeIndex++
    }
  }
  if (res > 1) {
    factorArray.push(res)    // res only guaranteed prime below 16128
  }
  return factorArray
}

export default factorise
