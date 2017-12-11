import finishAllDemoNotes from './finish_all_demo_notes'

const stopDemo = (state, key) => {

  finishAllDemoNotes(state)

  const stateDemo = state.demo
  stateDemo.playing = false

  const current = stateDemo.current
  current.name = ""
  current.nextTime = null
  current.notesLeft.length = 0     // Quick clear array!
  current.notesPlaying.length = 0  // Quick clear array!

  console.log(`Demo stopped`)
}

export default stopDemo
