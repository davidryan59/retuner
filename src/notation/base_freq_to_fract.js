// 256 Hz should map to C4 which is {}
// 512 to C5 {2:1}
// 128 to C3 {2:-1}
// 196 to G3 {2:-2, 3:1}
// etc

// Data of note mappings from 256 Hz to 512 Hz
import freqMaps from './base_freq_data.json'

const baseFreqToFract = (freq) => {

  let countOctaves = 0
  let theFreq = freq
  let freqOctaves = Math.log2(theFreq)
  // console.log(`${freq} ${theFreq} ${freqOctaves.toFixed(2)} ${countOctaves}`)

  // Get theFreq into the octave 256 to 512
  while (freqOctaves < 8 || freqOctaves > 9) {
    if (freqOctaves < 8) {
      theFreq *= 2
      countOctaves--
    } else if (freqOctaves > 9) {
      theFreq /= 2
      countOctaves++
    }
    freqOctaves = Math.log2(theFreq)
  }
  // Result here is countOctaves
  // console.log(`${freq} ${theFreq} ${freqOctaves.toFixed(2)} ${countOctaves}`)

  // Find the closest fract (in the JSON) to the octave-reduced freq
  let theMap = null
  let minOctaves = 10000
  for (const freqMap of freqMaps) {
    const compareFreq = parseFloat(freqMap.freq)
    const compareAbsOctaves = Math.abs(Math.log2(compareFreq / theFreq))
    if (compareAbsOctaves < minOctaves) {
      minOctaves = compareAbsOctaves
      theMap = freqMap.fract
    }
  }
  // Result here is theMap

  // Construct a new fract for the combined result
  const result = {
    2: parseInt(theMap["2"]) + countOctaves,
    3: parseInt(theMap["3"])
  }

  // console.log(result)

  return result

}

export default baseFreqToFract
