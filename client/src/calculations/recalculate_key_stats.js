const recalculateKeyStats = (key) => {

  // Firstly, set numerator and denominator if necessary
  // Secondly, calculate stats from these

  if (key.transposePrimes && !key.transposes) {
    // Need to calculate numerator and denominator from prime factors
    let num = 1
    let denom = 1
    for (const primeFactorSubArray of key.transposePrimes) {
      const primeNumber = primeFactorSubArray[0]
      const exponent = primeFactorSubArray[1]
      if (exponent < 0) {
        denom *= primeNumber ** -exponent
      } else {
        num *= primeNumber ** exponent
      }
    }
    // Might also want to reduce num & denom
    // by their GCD as an auxiliary check.
    // But wouldn't be necessary if transpose prime arrays
    // are set up correctly
    key.transposes = {}
    key.transposes.num = num
    key.transposes.denom = denom
  }

  if (key.transposes) {
    const num = key.transposes.num
    const denom = key.transposes.denom
    key.transposes.factor = num / denom
    key.transposes.text = num + "/" + denom
  }

}

export default recalculateKeyStats
