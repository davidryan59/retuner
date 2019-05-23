import stopFinishedNotes from './stop_finished_notes'
import startNextNote from './start_next_note'
import goToNextDemo from './go_to_next_demo'

const checkDemoActivity = state => {
  const stateDemo = state.demo
  if (stateDemo.playing) {

    // 0) Setup variables
    const current = stateDemo.current
    const notesLeft = current.notesLeft
    const notesPlaying = current.notesPlaying
    const nextNoteStartTime = current.nextTime
    const currentTime = state.control.timing.timeTotalS

    // 1) Stop all notes which have run out of time
    stopFinishedNotes(state)

    // 2) Start a new note if its time for it
    if (nextNoteStartTime < currentTime && notesLeft.length) {
      startNextNote(state)
    }

    // 3) Finish demo if all notes have stopped
    if (!(notesLeft.length) && !(notesPlaying.length)) {
      stateDemo.playing = false
      const current = stateDemo.current
      current.name = ""
      current.nextTime = null
      console.log(`Demo finished`)
      goToNextDemo(state)
    }
  }
}

export default checkDemoActivity
