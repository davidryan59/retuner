const getBoundedFrequencyModOctaves = (minFreq, freq, maxFreq) => {
  let result = freq
  let index = 0
  if (result < minFreq) {
    index = Math.floor(Math.log2(minFreq/result))
    result *= 2 ** index
  }
  if (maxFreq < result) {
    index = -Math.floor(Math.log2(result/maxFreq))
    result *= 2 ** index
  }
  if (result !== freq) {
    // console.log(`${minFreq.toFixed(2)} ${freq.toFixed(2)} ${maxFreq.toFixed(2)} ${result.toFixed(2)}`)
  }
  return result
}

export default getBoundedFrequencyModOctaves
