// Cache the logarithms for better performance
const primeLogTwos = {}

const absLogComplexity = (fractObj) => {

  let result = 0
  for (const key of Object.keys(fractObj)) {
    let logBase2 = primeLogTwos[key]
    if (!logBase2) {
      const prime = parseInt(key)
      logBase2 = Math.log2(prime)
      primeLogTwos[prime] = logBase2
      console.log(`Stored log2(${prime}) as ${logBase2}`)
    }
    const exponent = fractObj[key]
    result += logBase2 * Math.abs(exponent)
  }

  return result

}

export default absLogComplexity
