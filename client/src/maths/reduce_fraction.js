import gcd from "./gcd"

const reduceFraction = (num, denom) => {
  const theGCD = gcd(num, denom)
  const newNum = num / theGCD
  const newDenom = denom / theGCD

  // // DEBUG
  // console.log(`${num}/${denom} reduced by ${theGCD} to ${newNum}/${newDenom}`)

  return [newNum, newDenom]
}

export default reduceFraction
