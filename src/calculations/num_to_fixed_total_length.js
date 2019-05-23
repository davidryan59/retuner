const numToFixedTotalLength = (number, length) => {

  let numText = number + ""
  const len = numText.length

  if (len > length) {
    // Number may be truncated in invalid way here...
    // ... not a lot that can be done, it needs to be fixed total length.
    numText = numText.substr(0, length)
  }
  if (len < length) {
    // Non-breaking space here
    const appendText = "\u00a0".repeat(length-len)
    numText = appendText + numText
  }

  return numText

}

export default numToFixedTotalLength
