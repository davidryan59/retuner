// Middle dot is U+2219
// However, its quite a thick character.
// Using a space instead.

const textFromPrimeAndExponent = (prime, exponent) => {
  if (exponent === 1) {
    return `${prime}`
  }
  const primePower = `${prime ** exponent}`
  if (primePower.length > 2) {
    return `${prime}^${exponent}`
  }
  // Use middle dot or space or power - can amend here
  // return `${prime}` + (` ${prime}`.repeat(exponent - 1))
  return `${primePower}`
}

export default textFromPrimeAndExponent
