import getSustainNumericOption from "./getSustainNumericOption"

const labelArray = ["OFF", "ON*", "ON"]

const getSustainTextLabel = (state, key) => {
  const numericValue = getSustainNumericOption(state, key)
  return labelArray[numericValue] || "ERR"
}

export default getSustainTextLabel
