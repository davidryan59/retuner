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

// // Node Testing
// const obj1 = {'2':1, 3:-5, 257: 4}
// const obj2 = {2:-1, 3:5, 5:1}
// console.log(obj1)
// console.log(obj2)
// const result = setFractUsingPowerMultiply(obj1, obj2)
// console.log(result)
// console.log(obj1)    // These two the same!

export default setFractUsingPowerMultiply
