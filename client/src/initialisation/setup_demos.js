import demo0 from "../demos/files/arpeggios.json"
import demo1 from "../demos/files/prelude.json"
import demo2 from "../demos/files/happy_birthday.json"

const setupDemos = (state) => {

  const stateDemo = state.demo

  // Store demos loaded from file
  stateDemo.list = [
    demo0, demo1, demo2
  ]

  // Choose one to start with
  stateDemo.index = 0
  stateDemo.playing = false

  // Place to store current demo info
  stateDemo.current = {}
  const currentDemo = stateDemo.current
  currentDemo.notesLeft = []
  currentDemo.notesPlaying = []
  currentDemo.name = ""
  currentDemo.nextTime = null     // Time of the next note to play

}

export default setupDemos
