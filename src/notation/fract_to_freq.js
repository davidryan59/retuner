const fractToFreq = (fractObj) => {

  let num = 1
  let denom = 1

  for (const key of Object.keys(fractObj)) {
    const prime = parseInt(key)
    const exponent = fractObj[key]
    const factor = prime ** Math.abs(exponent)
    if (exponent > 0) {
      num *= factor
    } else if (exponent < 0) {
      denom *= factor
    }
  }

  return num / denom
}

export default fractToFreq
