import commaRcnDr from './comma_rcn_dr'

const addComma = (state, prime) => {
  if (prime > 3) {
    const [a, b] = commaRcnDr(prime)
    const commaObject = {}
    commaObject[2] = a
    commaObject[3] = b
    commaObject[prime] = 1
    state.commas[prime] = commaObject
  }  
}

export default addComma
