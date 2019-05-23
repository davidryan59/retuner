import startDemo from '../../demos/start_demo'
import stopDemo from '../../demos/stop_demo'

const toggleDemo = (state, key) => {
  if (!state.demo.playing) {
    startDemo(state)
  } else {
    stopDemo(state)
  }
}

export default toggleDemo
