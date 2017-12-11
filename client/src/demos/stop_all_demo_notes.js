import {instrumentKeyUpHandler} from '../controllers/instrument_key_handlers'

const stopAllDemoNotes = (state) => {

  const notesPlaying = state.demo.current.notesPlaying
  for (const note of notesPlaying) {
    instrumentKeyUpHandler(state, note.key)
  }

  console.log(`Stopped all demo notes`)
}

export default stopAllDemoNotes
