const toggleTransposing = (state, key) => {

  state.freqs.transposing = (state.freqs.transposing === true) ? false : true
  console.log("Transposing is now", state.freqs.transposing)

}

export default toggleTransposing
