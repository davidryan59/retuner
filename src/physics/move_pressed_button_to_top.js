const movePressedButtonToTop = (state) => {

  const stateKey = state.key
  const keyIndexArray = stateKey.indexOrderArray
  const keyArray = stateKey.array
  const keyToMove = stateKey.moveToTop
  let matchIndex = null

  // If key has been pressed,
  // find the index which references it in keyOrderArray
  // and move that index to the end
  if (keyToMove) {
    for (const i in keyIndexArray) {
      const theKeyIndex = keyIndexArray[i]
      const theKey = keyArray[theKeyIndex]
      if (keyToMove === theKey) {
        matchIndex = i
      }
    }
  }

  if (matchIndex) {
    const j = keyIndexArray.splice(matchIndex, 1)
    keyIndexArray.push(j)
  }
  stateKey.moveToTop = null

}

export default movePressedButtonToTop
