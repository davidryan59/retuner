const gcd = (a, b) => {
  if (a * b === 0) {
    return 1
  }
  if (!b) {
    return Math.abs(a)
  }
  return gcd(b, a % b)
}

export default gcd
