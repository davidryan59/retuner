const setFractUsingPowerMultiply = (objectToSet, objectToMultiplyBy, power) => {

  // Each of the objects should be in output format
  // of fractionToFract, e.g. 2/3 would be {2:1, 3:-1}

  // If a third parameter is supplied, it is used to raise
  // objectToMultiplyBy to a specific power.
  // e.g. 2 will square, -1 will divide instead of multiply

  // Note that a power of 0 will be ignored since (0) is falsy.

  const mult = (power) ? parseInt(power) : 1

  for (const key of Object.keys(objectToMultiplyBy)) {
    const exponent = mult * objectToMultiplyBy[key]
    if (objectToSet[key]) {
      objectToSet[key] += exponent
      if (objectToSet[key] === 0) {
        delete objectToSet[key]   // If exponent is zero, remove from object
      }
    } else {
      objectToSet[key] = exponent
    }
  }

  return objectToSet
}

export default setFractUsingPowerMultiply
