const recordNote = (state, key) => {
  if (key.transposes) {
    const num = key.transposes.num
    const denom = key.transposes.denom
    const stateRec = state.recording
    const nextIndex = stateRec.nextIndex
    if (nextIndex < stateRec.length) {
      stateRec.numArray[nextIndex] = num
      stateRec.denomArray[nextIndex] = denom
    } else {
      stateRec.numArray.push(num)
      stateRec.denomArray.push(denom)
    }
    stateRec.nextIndex++
  }

}

export default recordNote
