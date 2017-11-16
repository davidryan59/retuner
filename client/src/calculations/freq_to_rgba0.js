const b1 = 1200 * Math.log2(16/15)
const b2 = 1200 * Math.log2(9/8)
const b3 = 1200 * Math.log2(5/4)
const b4 = 1200 * Math.log2(4/3)
const b5 = 1200 * Math.log2(3/2)

const d1 = b2 - b1
const d2 = b3 - b2
const d3 = b4 - b3
const d4 = b5 - b4
const d5 = 1200 - b5

const array1 = [255, 0, 0]
const array2 = [255, 0, 255]
const array3 = [0, 0, 255]
const array4 = [0, 255, 255]
const array5 = [0, 255, 0]
const array6 = [255, 255, 0]

const freqToRGBA = (freq, alpha) => {
  // 1/1 = 1.000 is RED
  // 16/15 = 1.067 is MAGENTA
  // 9/8 = 1.125 is BLUE
  // 5/4 = 1.250 is CYAN
  // 4/3 = 1.333 is GREEN
  // 3/2 = 1.500 is YELLOW
  // 2/1 = 2.000 is RED again

  const pitch = Math.log2(freq) % 1
  const cents = pitch * 1200

  // Exact value of these initialisations doesn't matter, they get overwritten
  let endFactor = 0
  let [startR, startG, startB] = array1
  let [endR, endG, endB] = array1

  if (cents < b1) {
    endFactor = cents/b1;
    [startR, startG, startB] = array1;
    [endR, endG, endB] = array2;
  } else if (cents < b2) {
    endFactor = (cents-b1)/d1;
    [startR, startG, startB] = array2;
    [endR, endG, endB] = array3;
  } else if (cents < b3) {
    endFactor = (cents-b2)/d2;
    [startR, startG, startB] = array3;
    [endR, endG, endB] = array4;
  } else if (cents < b4) {
    endFactor = (cents-b3)/d3;
    [startR, startG, startB] = array4;
    [endR, endG, endB] = array5;
  } else if (cents < b5) {
    endFactor = (cents-b4)/d4;
    [startR, startG, startB] = array5;
    [endR, endG, endB] = array6;
  } else {
    endFactor = (cents-b5)/d5;
    [startR, startG, startB] = array6;
    [endR, endG, endB] = array1;
  }

  const startFactor = 1 - endFactor

  const [finalR, finalG, finalB] = [
    startR * startFactor + endR * endFactor,
    startG * startFactor + endG * endFactor,
    startB * startFactor + endB * endFactor
  ]

  return `rgb(${finalR}, ${finalG}, ${finalB}, ${alpha})`

}

export default freqToRGBA
