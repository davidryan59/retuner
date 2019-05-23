import textFromPrimeAndExponent from './text_from_prime_and_exponent'

const fractToNumDenom = (fractObj, inputSmallestPrime) => {

  const smallestPrime = (!inputSmallestPrime) ? 2 : inputSmallestPrime
  let numText = ""
  let denomText = ""

  for (const key of Object.keys(fractObj)) {
    const prime = parseInt(key)
    if (smallestPrime <= prime) {
      const exponent = fractObj[key]
      if (exponent > 0) {
        if (numText.length > 0) {
          numText += " "
        }
        numText += textFromPrimeAndExponent(prime, exponent)
      } else if (exponent < 0) {
        if (denomText.length > 0) {
          denomText += " "
        }
        denomText += textFromPrimeAndExponent(prime, -exponent)
      }
    }
  }

  return [numText, denomText]
}

export default fractToNumDenom
