const gcd = (a, b) => {
  if (!a) {
    // This copes with the 0/0 case, and returns something sensible!
    return 1
  }
  if (!b) {
    return Math.abs(a)
  }
  return gcd(b, a % b)
}

export default gcd
