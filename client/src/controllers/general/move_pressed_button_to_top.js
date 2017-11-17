const movePressedButtonToTop = (state) => {

  const key = state.keyLastPressed
  let matchIndex = null

  // If key has been pressed,
  // find the index which references it in keyOrderArray
  // and move that index to the end
  if (key) {
    for (const i in state.keyOrderArray) {
      const theKeyIndex = state.keyOrderArray[i]
      const theKey = state.keys[theKeyIndex]
      if (key === theKey) {
        matchIndex = i
      }
    }
  }

  if (matchIndex) {
    const j = state.keyOrderArray.splice(matchIndex, 1)
    state.keyOrderArray.push(j)
  }
  state.keyLastPressed = null

}

export default movePressedButtonToTop
