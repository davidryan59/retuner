import setFractUsingPowerMultiply from './set_fract_using_power_multiply'

const textFromPythagItem = (item) => {
  const label = item[0]
  const repeats = item[1]
  if (repeats > 4) {
    return `[${label}${repeats}]`
  } else {
    return label.repeat(repeats)
  }
}

const textFromOctaveNumber = (octaveNum) => {
  if (octaveNum < 0) {
    return `(${octaveNum})`
  } else {
    return `${octaveNum}`
  }
}

const commaTextFromHigherPrimes = (higherPrimesObject) => {
  // Make a prime comma notation here
  let exp5 = 0
  let num = 1
  let denom = 1
  for (const key of Object.keys(higherPrimesObject)) {
    const prime = parseInt(key)
    const exponent = higherPrimesObject[key]
    if (prime === 5) {
      exp5 = exponent
    } else {
      num *= Math.max(1, prime ** exponent)
      denom *= Math.max(1, prime ** -exponent)
    }
  }
  let exp5Text = ""
  if (exp5 > 0) {
    exp5Text = "'".repeat(exp5)
  } else if (exp5 < 0) {
    exp5Text = ".".repeat(-exp5)
  }
  const denomText = (denom > 1) ? `/${denom}` : ""
  const commaText = (num * denom > 1) ? `[${num}${denomText}]` : ""
  // For large num, denom, ought to switch to an exponential form...
  return `${exp5Text}${commaText}`
}

const getFract = (fractionObject, prime) => {
  const result = fractionObject[prime]
  return (result) ? result : 0
}

// These are optional
// Can have something on the state to turn these on and off
const pythagoreanSimplifiers = [
  {
    label: "p",
    above: 19,                 // 10 = above A#, from E# = Fp onwards
    fract: {2: -19, 3: 12},    // 531441 / 524288
    name: "Pythagorean Comma"
  },
  {
    label: "d",
    below: -15,                 // -6 = below Gb, from Cb = Bd onwards
    fract: {2: 19, 3: -12},    // 524288 / 531441
    name: "Inverse Pythagorean Comma"
  }
]

// These are mandatory
// Need them to cover all 3-exponents
const sharpFlatSimplifiers = [
  {
    label: "#",
    above: 5,                  // 5 = above B, from F# onwards
    fract: {2: -11, 3: 7},     // 2187/2048
    name: "Sharp"
  },
  {
    label: "b",
    below: -1,                 // -1 = below F, from Bb onwards
    fract: {2: 11, 3: -7},     // 2048/2187
    name: "Flat"
  }
]

const useSimplifiers = (residualObject, simplifierArray) => {
  let exp3 = getFract(residualObject, 3)
  const pythagoreanLabels = []
  for (const obj of simplifierArray) {
    const label = obj.label
    const fract = obj.fract
    const reducesBy = Math.abs(fract["3"])
    const above = obj.above
    const below = obj.below
    // It should be exactly one of 'above' or 'below'
    if (above) {
      if (above < exp3) {
        const countUses = Math.ceil((exp3 - above) / reducesBy)
        pythagoreanLabels.push([label, countUses])
        setFractUsingPowerMultiply(residualObject, fract, -countUses)
        // exp3 = getFract(residualObject, 3)
      }
    }
    if (below) {
      if (exp3 < below) {
        const countUses = Math.ceil((below - exp3) / reducesBy)
        pythagoreanLabels.push([label, countUses])
        setFractUsingPowerMultiply(residualObject, fract, -countUses)
        // exp3 = getFract(residualObject, 3)
      }
    }
  }
  return pythagoreanLabels
}

const noteNames = [
  {label: "F", fract: {2: 2, 3: -1}},    // 4/3
  {label: "C", fract: {2: 0, 3: 0}},     // 1/1
  {label: "G", fract: {2: -2, 3: 1}},    // 3/4
  {label: "D", fract: {2: -3, 3: 2}},    // 9/8
  {label: "A", fract: {2: -4, 3: 3}},    // 27/16
  {label: "E", fract: {2: -6, 3: 4}},    // 81/64
  {label: "B", fract: {2: -7, 3: 5}}     // 243/128
]

const fractToNotation = (state, fractionObject) => {
  // Assuming that the list of commas on the state
  // is up to date. Otherwise this method will fail.

  const commaInfo = state.comma
  // Prime is the key, comma fraction object the value

  // Build up a notation by breaking down a residual
  // which starts as the original fraction
  const higherPrimeCommasObject = {}
  const residualObject = {}
  Object.assign(residualObject, fractionObject)

  // Primes 5 and above are independent in this scheme
  // Can cancel them out independently
  for (const key of Object.keys(residualObject)) {
    const prime = parseInt(key)
    const exponent = residualObject[key]
    if (prime > 3) {
      const comma = commaInfo[key]
      higherPrimeCommasObject[key] = exponent
      setFractUsingPowerMultiply(residualObject, comma, -exponent)
    }
  }

  // OK UP TO HERE
  // DEBUG THE BELOW

  const pythagLabelArray = []
  if (state.notation.usePythagoreanCommas) {
    // Optionally add labels from Pythagorean simplifiers
    pythagLabelArray.push(...useSimplifiers(residualObject, pythagoreanSimplifiers))
  }
  // Add sharp and flat labels
  pythagLabelArray.push(...useSimplifiers(residualObject, sharpFlatSimplifiers))

  // 3-exponent of residualObject should now be in the range -1 to 5
  // Find the note name
  const exp3 = getFract(residualObject, 3)
  const noteName = noteNames[exp3 + 1]
  const label = noteName.label
  const fract = noteName.fract
  pythagLabelArray.unshift([label, 1])      // Unshift - Add at start!
  setFractUsingPowerMultiply(residualObject, fract, -1)
  // exp3 = getFract(residualObject, 3) // should now be 0

  // 2-exponent now determines the octave number
  const exp2 = getFract(residualObject, 2)
  const octaveNumber = exp2 + 4        // C4 = 1/1

  // Now have:
  // - pythagLabelArray
  // - higherPrimeCommasObject
  // - octaveNumber
  // Put them together into a single text field

  let notationText = ""
  for (const item of pythagLabelArray) {
    notationText += textFromPythagItem(item)
  }
  notationText += commaTextFromHigherPrimes(higherPrimeCommasObject)
  notationText += textFromOctaveNumber(octaveNumber)

  return notationText
}

export default fractToNotation
