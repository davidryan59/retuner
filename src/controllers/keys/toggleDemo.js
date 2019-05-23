import startDemo from '../../demos/startDemo'
import stopDemo from '../../demos/stopDemo'

const toggleDemo = (state, key) => {
  if (!state.demo.playing) {
    startDemo(state)
  } else {
    stopDemo(state)
  }
}

export default toggleDemo
