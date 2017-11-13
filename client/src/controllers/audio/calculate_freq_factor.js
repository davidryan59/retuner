const calculateFreqFactor = (state, key) => {

  let freqFactor = 1
  const keyTransposes = key.transposes
  if (keyTransposes) {
    const transposeNum = key.transposes.num || 1
    const transposeDenom = key.transposes.denom || 1
    // Overwrite freq factor if instrument key:
    // 1) transposes, and
    // 2) has num and/or denom set
    freqFactor = transposeNum / transposeDenom
  }

  return freqFactor

}

export default calculateFreqFactor
