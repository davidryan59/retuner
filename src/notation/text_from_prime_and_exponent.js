const textFromPrimeAndExponent = (prime, exponent) => {
  if (exponent === 1) {
    return `${prime}`
  }
  const primePower = `${prime ** exponent}`
  if (primePower.length > 2) {
    return `${prime}^${exponent}`
  }
  return `${primePower}`
}

export default textFromPrimeAndExponent
