const checkDemoActivity = (state) => {
  const stateDemo = state.demo
  if (stateDemo.playing) {
    // The Demo function plays a set of notes
    // Need to do two things here:
    // 1) Start any notes if its the right time for them to start
    //    (should only be 1 per loop)
    // 2) Stop any notes which have finished
    //    (could be any of the set of currently playing notes)


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
