const stopDemo = (state, key) => {

  // Stop all the notes currently playing due to the demo
  // These are stored in notesPlaying

  const stateDemo = state.demo
  stateDemo.playing = false

  const current = stateDemo.current
  current.name = ""
  current.nextTime = null
  current.notesLeft.length = 0     // Quick clear array!
  current.notesPlaying.length = 0  // Quick clear array!

  console.log(`Demo stopped (NEED TO STOP ALL NOTES IN THIS SCRIPT)`)
}

export default stopDemo
