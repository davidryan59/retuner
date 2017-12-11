const toggleDemo = (state, key) => {
  // On starting a demo, need a loading activity, as well as toggle on
  // On finishing, just need to toggle off
  const playing = state.demo.playing
  state.demo.playing = (playing) ? false : true
  console.log(`Demo toggled to ${state.demo.playing} (NOT YET IMPLEMENTED)`)


}

export default toggleDemo
