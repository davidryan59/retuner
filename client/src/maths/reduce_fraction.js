import gcd from "./gcd"

const reduceFraction = (a, b) => {
  const factor = gcd(a, b)
  return [a/factor, b/factor]
}

export default reduceFraction
