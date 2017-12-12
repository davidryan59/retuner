import {instrumentKeyDownHandler, instrumentKeyUpHandler} from '../controllers/instrument_key_handlers'

const secondsPerBeat = 0.13

const startNextNote = (state) => {

  const currentTime = state.control.timing.timeTotalS
  const current = state.demo.current

  // Remove note to play from notesLeft
  const note = current.notesLeft.shift()

  // Setup variables
  const beats = note.beats || 1
  const delay = note.delay || 0    // Negative to overlap notes, positive to leave gaps
  const nextBeats = beats + delay
  const key = note.key
  const keyName = key.keyboardCode
  const keyFract = key.transposes.textFraction

  // - Give it an end time
  note.endTime = currentTime + secondsPerBeat * beats

  // - Add it to notesPlaying
  current.notesPlaying.push(note)

  // - Amend the start time of the next note
  current.nextTime = currentTime + secondsPerBeat * nextBeats

  // - Use the key handlers to actually play the note (via its key)
  console.log(`Started a note ${keyName} ${keyFract}`)
  // If (for any reason) its already pressed, unpress it
  instrumentKeyUpHandler(state, key)
  // Press the key
  instrumentKeyDownHandler(state, key)

}

export default startNextNote
