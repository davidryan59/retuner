import testDemo from "../demos/test_demo.json"

const setupDemos = (state) => {

  const stateDemo = state.demo

  stateDemo.list = []
  const demos = stateDemo.list
  // Put all demos into the list
  demos.push(testDemo)

  // Choose one to start with
  stateDemo.index = 0
  stateDemo.playing = false

  // Place to store current demo info
  stateDemo.current = {}
  const currentDemo = stateDemo.current
  currentDemo.notes = []
  currentDemo.nextTime = null     // Time of the next note to play

}

export default setupDemos
