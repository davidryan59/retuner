const findKeyByKeyboardCode = (state, keyboardCode) => {

  const keyArray = state.keys
  // When page is loading, this might be undefined
  // Exit gracefully and quietly
  if (!keyArray) {
    return null
  }

  for (const key of keyArray) {
    if (key.keyboardCode === keyboardCode) {
      // console.log("Matched", keyboardCode)
      return key
    }
  }

  // console.log("Didn't match", keyboardCode)
  return null
}

export default findKeyByKeyboardCode
