import startDemo from '../../demos/start_demo'

const toggleDemo = (state, key) => {
  // On starting a demo, need a loading activity, as well as toggle on
  // On finishing, just need to toggle off

  // Toggle state
  const stateDemo = state.demo
  stateDemo.playing = (stateDemo.playing) ? false : true  
  console.log(`Demo toggled to ${state.demo.playing}`)

  // Start demo if needed
  if (stateDemo.playing) {
    startDemo(state)
  }
}

export default toggleDemo
