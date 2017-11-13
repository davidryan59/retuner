const transposingSuspended = (state, key) => {
  // console.log("Running 'transposing suspended'")
  return !state.freqs.transposing
}

export default transposingSuspended
