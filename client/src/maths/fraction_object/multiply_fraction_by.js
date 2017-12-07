const multiplyFractionBy = (objectToSet, objectToMultiplyBy) => {

  // Each of the objects should be in output format
  // of fractionToObject, e.g. 2/3 would be {2:1, 3:-1}

  for (const key of Object.keys(objectToMultiplyBy)) {
    if (objectToSet[key]) {
      objectToSet[key] += objectToMultiplyBy[key]
      if (objectToSet[key] === 0) {
        delete objectToSet[key]   // If exponent is zero, remove from object
      }
    } else {
      objectToSet[key] = objectToMultiplyBy[key]
    }
  }

  return objectToSet
}

// // Node Testing
// const obj1 = {'2':1, 3:-5, 257: 4}
// const obj2 = {2:-1, 3:5, 5:1}
// console.log(obj1)
// console.log(obj2)
// const result = multiplyFractionBy(obj1, obj2)
// console.log(result)
// console.log(obj1)    // These two the same!

export default multiplyFractionBy
