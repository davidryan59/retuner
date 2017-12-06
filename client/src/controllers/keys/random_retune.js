const randomRetune = (state, key) => {

  // Not yet called.
  // Main purpose was to test the key.transposes.set method
  // updated all the cached info correctly
  // and also the global prime state.

  let randIndex = 0
  let retunes = false
  while (!retunes) {
    randIndex = Math.round(3+62*(Math.random()))
    const keyToRetune = state.key.array[randIndex]
    if (keyToRetune.transposes) {
      const newNum = Math.round(50 + 50 * Math.random())
      const newDenom = Math.round(50 + 50 * Math.random())
      keyToRetune.transposes.set(state, keyToRetune, newNum, newDenom)
      retunes = true
      console.log(`Randomly retuned ${keyToRetune.symbol} to ${keyToRetune.transposes.text}`)
    }
  }

}

export default randomRetune
