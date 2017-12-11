import {instrumentKeyDownHandler, instrumentKeyUpHandler} from '../controllers/instrument_key_handlers'

const secondsPerBeat = 0.3

const checkDemoActivity = (state) => {
  const stateDemo = state.demo
  if (stateDemo.playing) {
    const current = stateDemo.current
    const notesLeft = current.notesLeft
    const notesPlaying = current.notesPlaying
    // The Demo function plays a set of notes
    // Need to do two things here:

    // 1) Start any notes if its the right time for them to start
    //    (should only be 1 per loop)
    const currentTime = state.control.timing.timeTotalS
    const nextNoteTime = current.nextTime
    if (nextNoteTime < currentTime && notesLeft.length) {
      // Start the next note, which involves:

      // - Remove it from notesLeft
      // - Give it an end time
      // - Add it to notesPlaying
      const note = notesLeft.shift()
      note.endTime = currentTime + secondsPerBeat * (note.beats)
      notesPlaying.push(note)

      // - Amend the start time of the next note
      current.nextTime = currentTime + secondsPerBeat * (note.beats + note.delay)

      // - Use the key handler to actually play the note (via its key)
      const key = note.key
      const keyName = key.keyboardCode
      const keyFract = key.transposes.textFraction
      console.log(`Started a note ${keyName} ${keyFract}`)
      instrumentKeyDownHandler(state, key)
    }

    // 2) Stop any notes which have finished
    //    (could be any of the set of currently playing notes)
    // Now loop over notesPlaying, and stop any notes which are finished
    for (let i = 0; i < notesPlaying.length; i++) {
      const note = notesPlaying[i]
      const endTime = note.endTime
      if (endTime < currentTime) {
        // Found a note to end:
        // - Use key handler to stop the note
        const key = note.key
        const keyName = key.keyboardCode
        const keyFract = key.transposes.textFraction
        console.log(`Stopped a note ${keyName} ${keyFract}`)
        instrumentKeyUpHandler(state, key)
        // - Remove it from the array
        notesPlaying.splice(i, 1)
        // - Break - only end one note per check
        break
      }
    }

    // If all notes have finished playing, stop the demo
    if (!(notesLeft.length) && !(notesPlaying.length)) {
      stateDemo.playing = false
      console.log(`Demo finished`)
    }
  }
}

export default checkDemoActivity



  //
  // stateDemo.list = []
  // const demos = stateDemo.list
  // // Put all demos into the list
  // demos.push(testDemo)
  //
  // // Choose one to start with
  // stateDemo.index = 0
  //
  //
  // // Place to store current demo info
  // stateDemo.current = {}
  // const currentDemo = stateDemo.current
  // currentDemo.notes = []
  // currentDemo.nextTime = null     // Time of the next note to play
