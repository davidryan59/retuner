const extractAllPrimeFactors = (inputArray) => {
  // Input array is of things like
  // {'2':1, '3':-1} to represent 2/3
  // [[2, 1], [3, -1]]
  // which represents 2/3 = 2^1 * 3^-1
  // This contains the primes 2, 3
  // Iterate through the input array, and extract all such prime numbers
  // The primes are 3 levels deep in the array!

  // It is assumed that the entries of the input array
  // are correctly formatted, e.g. as output of factorise fraction function.
  // Otherwise spurious or non-primes will be outputted.

  const primesFound = []
  let thePrime = null

  for (const fractionObject of inputArray) {
    for (const key of Object.keys(fractionObject)) {
      // In this object, primes are keys, exponents are values!
      thePrime = parseInt(key)
      if (!primesFound.includes(thePrime)) {
        primesFound.push(thePrime)
      }
    }
  }

  return primesFound.sort((a, b) => a - b)

}

export default extractAllPrimeFactors
