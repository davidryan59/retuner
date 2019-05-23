const toggleTransposing = (state, key) => {

  state.freq.transposing = (state.freq.transposing === true) ? false : true
  console.log("Transposing is now", state.freq.transposing)

}

export default toggleTransposing
