const stopNote = (state, key) => {
  let prevNote = key.currentNote
  const adsr = state.waveform.adsrOnReleaseNote

  // SEE HOW ADSR is applied to Play note
  // Do the same here for Release Note

  if (prevNote) {
    prevNote.stop(0)
    prevNote = null
  }
}

export default stopNote
