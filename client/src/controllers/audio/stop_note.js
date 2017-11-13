const stopNote = (state, key) => {
  let prevNote = key.currentNote
  if (prevNote) {
    prevNote.stop(0)
    prevNote = null
    // console.log("Previous note on", key.keyboardCode, "stopped")
  }
}

export default stopNote
