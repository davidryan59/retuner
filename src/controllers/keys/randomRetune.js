const retuneFactor = 500

const randomRetune = (state, key) => {

  // Retune one transposing key at random!
  // More of a novelty function, not likely to be used in serious musical work.

  let randIndex = 0
  let retunes = false
  while (!retunes) {
    randIndex = Math.round(3+62*(Math.random()))
    const keyToRetune = state.key.array[randIndex]
    if (keyToRetune.transposes) {
      const newNum = Math.round(retuneFactor * (1 + Math.random()))
      const newDenom = Math.round(retuneFactor * (1 + Math.random()))
      keyToRetune.transposes.setNumDenom(state, keyToRetune, newNum, newDenom)
      retunes = true
      console.log(`Randomly retuned ${keyToRetune.symbol} to ${keyToRetune.transposes.textFraction}`)
    }
  }

}

export default randomRetune
