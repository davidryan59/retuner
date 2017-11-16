// This doesn't appear to work yet... not sure why.

const reSortKeys = (state) => {
  // Only re-sort the array every N frames
  // (Sorting can be expensive)
  if (state.control.loopCount % 40 === 0) {
    // console.log("A key is", state.keys[5])
    // console.log("A radius comparison is", state.keys[5].location.r - state.keys[4].location.r)
    state.keys.sort((key1, key2)=>{
      Math.round(10000 * key1.location.r) - Math.round(10000 * key2.location.r)
    })
  }
}

export default reSortKeys
