import setFractUsingPowerMultiply from './set_fract_using_power_multiply'
import fractToNumDenom from './fract_to_num_denom'

const textFromLabel = (label, repeats, iGroupRepeats, iFirstChar, iLastChar) => {
  if (label && repeats > 0) {
    const groupRepeats = (!iGroupRepeats) ? 4 : parseInt(iGroupRepeats)
    const firstChar = (!iFirstChar) ? "(" : iFirstChar
    const lastChar = (!iLastChar) ? ")" : iLastChar
    if (repeats >= groupRepeats) {
      return `${firstChar}${label}${repeats}${lastChar}`
    } else {
      return label.repeat(repeats)
    }
  } else {
    return ""
  }
}

const textsFromLabelAndExponent = (exponent) => {
  if (exponent === 0) {
    return ["", "", ""]
  }
  let label = "'"
  let exp = exponent
  if (exponent < 0) {
    label = "."
    exp = -exp
  }
  if (exp < 4) {
    return [label.repeat(exp), "", ""]
  }
  let numText = ""
  let denomText = ""
  if (exponent < 0) {
    denomText = `5^${-exponent}`
  } else {
    numText = `5^${exponent}`
  }
  return ["", numText, denomText]
}

const textFromOctaveNumber = (octaveNum) => {
  if (octaveNum < 0) {
    return `(O${octaveNum})`
  } else {
    return `${octaveNum}`
  }
}

const commaTextFromHigherPrimes = (fractObj, prime) => {
  let [numText, denomText] = fractToNumDenom(fractObj, prime)
  if (!numText && !denomText) {
    return ""
  }
  if (!numText) {
    return ` [1 / ${denomText}]`
  }
  if (!denomText) {
  return ` [${numText}]`
  }
  return ` [${numText} / ${denomText}]`
}

const getFract = (fractObj, prime) => {
  const result = fractObj[prime]
  return (result) ? result : 0
}

// Simplifiers given for +7, -7 powers of 3.
// These are mandatory, note names won't work otherwise
// It would be possible to do simplifiers for Pythagorean commas 3^12
// and potentially higher commas, such as 3^53, 3^665
// (see denominators of convergents for log2(3)
// expressed as a continued fraction in OEIS 2016, A005664)
// But these haven't been implemented for now since
// its tricky figuring out how to format the text...
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

const useSimplifiers = (residualFract, simplifierArray) => {
  let exp3 = getFract(residualFract, 3)
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
        setFractUsingPowerMultiply(residualFract, fract, -countUses)
        // exp3 = getFract(residualFract, 3)
      }
    }
    if (below) {
      if (exp3 < below) {
        const countUses = Math.ceil((below - exp3) / reducesBy)
        pythagoreanLabels.push([label, countUses])
        setFractUsingPowerMultiply(residualFract, fract, -countUses)
        // exp3 = getFract(residualFract, 3)
      }
    }
  }
  return pythagoreanLabels
}

const noteNames = [
  {label: "F", fract: {2: 2, 3: -1}},    // 4/3
  {label: "C", fract: {2: 0, 3: 0}},     // 1/1
  {label: "G", fract: {2: -1, 3: 1}},    // 3/2
  {label: "D", fract: {2: -3, 3: 2}},    // 9/8
  {label: "A", fract: {2: -4, 3: 3}},    // 27/16
  {label: "E", fract: {2: -6, 3: 4}},    // 81/64
  {label: "B", fract: {2: -7, 3: 5}}     // 243/128
]

const fractToNotation = (state, fractObj) => {
  // Assuming that the list of commas on the state
  // is up to date. Otherwise this method will fail.

  const commaInfo = state.comma
  // Prime is the key, comma fraction object the value

  // Build up a notation by breaking down a residual
  // which starts as the original fraction
  // This object is for primes 5 and above.
  const higherPrimeCommasObject = {}
  const residualFract = {}
  Object.assign(residualFract, fractObj)

  // Primes 5 and above are independent in this scheme
  // Can cancel them out independently
  for (const key of Object.keys(residualFract)) {
    const prime = parseInt(key)
    const exponent = residualFract[key]
    if (prime > 3) {
      const comma = commaInfo[key]
      higherPrimeCommasObject[key] = exponent
      setFractUsingPowerMultiply(residualFract, comma, -exponent)
    }
  }

  // Add sharp and flat labels
  // After deducting this out, there should only be
  // 7 choices of 3-exponent left, in range -1 to 5
  let [labelSF, expSF] = ["", 0]
  const returnedArray = useSimplifiers(residualFract, sharpFlatSimplifiers)
  if (returnedArray.length) {
    [labelSF, expSF] = returnedArray[0]
  }

  // Find the note name
  const exp3 = getFract(residualFract, 3)
  const noteNameArray = noteNames[exp3 + 1]
  const noteName = noteNameArray.label
  const fract = noteNameArray.fract
  setFractUsingPowerMultiply(residualFract, fract, -1)
  // exp3 = getFract(residualFract, 3) // should now be 0

  // 2-exponent now determines the octave number
  const exp2 = getFract(residualFract, 2)
  const octaveNumber = exp2 + 4        // C4 = 1/1

  // Finished breaking down residualFract!
  // Now use stats obtained so far to construct a full note name.

  // Special notation for comma of prime 5.
  // Count these separately
  let exp5 = getFract(fractObj, 5)
  const label5 = (exp5 > 0) ? "'" : "."
  exp5 = Math.abs(exp5)

  // Get notation for commas of prime 7 and above
  const commaText = commaTextFromHigherPrimes(fractObj, 7)

  // Now have:
  // noteName (F, C, G...)
  // labelSF, expSF (#, b)
  // label5, exp5   (prime 5 uses ' and . )
  // octaveNumber
  // commaText      (7, 11, 13, 17...)
  // Put them together into a single text field

  let notationText = noteName
  notationText += textFromLabel(labelSF, expSF, 5)
  notationText += textFromLabel(label5, exp5, 4)
  notationText += textFromOctaveNumber(octaveNumber)
  notationText += commaText

  return notationText
}

export default fractToNotation
