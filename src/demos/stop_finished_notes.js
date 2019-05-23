import {instrumentKeyUpHandler} from '../controllers/instrument_key_handlers'

const stopFinishedNotes = state => {

  const currentTime = state.control.timing.timeTotalS
  const notesPlaying = state.demo.current.notesPlaying

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
      // - Remove it from the array, decrement counter
      notesPlaying.splice(i, 1)
      i--
    }
  }
}

export default stopFinishedNotes
