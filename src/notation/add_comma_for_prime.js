import primeToRcnCommaDr from './prime_to_rcn_comma_dr'

const addCommaForPrime = (state, prime) => {
  if (prime > 3) {
    const [a, b] = primeToRcnCommaDr(prime)
    const commaObject = {}
    commaObject[2] = a
    commaObject[3] = b
    commaObject[prime] = 1
    state.comma[prime] = commaObject
  }
}

export default addCommaForPrime
