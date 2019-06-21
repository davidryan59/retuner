import Peo from 'peo'

import freqMaps from './baseFreqMaps.json'

// Overall result:
// 256 Hz should map to C4 which is {}
// 512 to C5 {2:1}
// 128 to C3 {2:-1}
// 196 to G3 {2:-2, 3:1}
// etc
const baseFreqToPeo = freq => {

  let countOctaves = 0
  let theFreq = freq
  let freqOctaves = Math.log2(theFreq)

  // Get theFreq into the octave 256 to 512
  // to calculate countOctaves
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

  // Find the closest fract (in the .json file) to the octave-reduced freq
  let theMap = null
  let peoConstructObject = freqMaps[0].makePeo   // start at C4
  let minOctaves = 10000
  for (const freqMap of freqMaps) {
    const compareFreq = parseFloat(freqMap.freq)
    const compareAbsOctaves = Math.abs(Math.log2(compareFreq / theFreq))
    if (compareAbsOctaves < minOctaves) {
      minOctaves = compareAbsOctaves
      peoConstructObject = freqMap.makePeo
    }
  }
  
  const peoMain = new Peo(peoConstructObject)
  const peoOct = new Peo({2:countOctaves})
  const result = peoMain.mult(peoOct)
  return result
}

export default baseFreqToPeo
