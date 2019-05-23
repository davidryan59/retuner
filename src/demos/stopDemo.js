import stopAllDemoNotes from './stopAllDemoNotes'
import goToNextDemo from './goToNextDemo'

const stopDemo = (state, key) => {

  stopAllDemoNotes(state)

  const stateDemo = state.demo
  stateDemo.playing = false

  const current = stateDemo.current
  current.name = ""
  current.nextTime = null
  current.notesLeft.length = 0     // Quick clear array!
  current.notesPlaying.length = 0  // Quick clear array!

  console.log(`Demo stopped`)
  goToNextDemo(state)
}

export default stopDemo
