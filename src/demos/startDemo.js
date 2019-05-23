import findClosestKeyToFraction from '../calcs/findClosestKeyToFraction'

const startDemo = (state, key) => {

  // Get demo info
  const stateDemo = state.demo
  stateDemo.playing = true

  const index = stateDemo.index
  const file = stateDemo.list[index]
  const name = file.name
  const bpm = file.bpm
  const notes = file.demo

  // Change speed to be right value for this demo
  if (bpm) {
    state.slider.bpm.setValue(bpm)
  }

  // Make bpm flash in time with this demo
  state.slider.bpm.timeOffset = state.control.timing.timeTotalS

  // Setup name, notes and note keys of demo to start
  const current = stateDemo.current
  current.name = name
  for (const note of notes) {
    current.notesLeft.push(note)
    // Do we need a copy of the note?
    // Or is the original OK?
    // Not planning to alter note in any way, so it might be OK?
    // Need to map from relative frequencies to note codes here...
    const num = note.freqRel.num
    const denom = note.freqRel.denom
    if (num && denom) {
      const fraction = num / denom
      note.key = findClosestKeyToFraction(state, fraction)
      // This alters the original object too!
    }
  }

  // Start the first note immediately
  current.nextTime = state.control.timing.timeTotalS

  console.log(`Demo started`)
}

export default startDemo
