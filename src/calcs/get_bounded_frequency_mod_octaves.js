const getBoundedFrequencyModOctaves = (minFreq, freq, maxFreq) => {

  let result = freq
  let index = 0
  
  if (result < minFreq) {
    index = Math.ceil(Math.log2(minFreq/result))
    result *= 2 ** index
  } else if (maxFreq < result) {
    index = -Math.ceil(Math.log2(result/maxFreq))
    result *= 2 ** index
  }

  return result

}

export default getBoundedFrequencyModOctaves
