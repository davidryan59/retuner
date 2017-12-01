const setSlider = (state, newValue, sourceObj, description, unit) => {



  // Get bounds
  const minValue = sourceObj.min
  const maxValue = sourceObj.max

  // Bound the new value
  let newCheckedValue = parseFloat(newValue)
  if (newCheckedValue < minValue) {
    newCheckedValue = minValue
  }
  if (maxValue < newCheckedValue) {
    newCheckedValue = maxValue
  }

  // Do the update
  sourceObj.current = newCheckedValue
  sourceObj.updated = true

  // Get texts
  const descriptionText = (!description) ? "Variable" : description
  const unitText = (!unit) ? "" : unit

  // Log the change
  console.log(`${descriptionText} set to ${newCheckedValue.toFixed(1)} ${unitText}`)

}

export default setSlider
