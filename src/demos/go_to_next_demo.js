const goToNextDemo = (state) => {

  const stateDemo = state.demo

  const numberOfDemos = stateDemo.list.length
  stateDemo.index = ( stateDemo.index + 1 ) % numberOfDemos
  const nextDemoName = stateDemo.list[stateDemo.index].name

  console.log(`Next demo is ${nextDemoName}`)
}

export default goToNextDemo
