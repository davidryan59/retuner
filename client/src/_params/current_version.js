const setupCurrentVersion = (state) => {

  state.version = {}
  state.version.number = "v1.0.9"
  state.version.date = "4th Dec 2017"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
