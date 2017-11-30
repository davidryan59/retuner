const setupCurrentVersion = (state) => {

  state.version = {}
  state.version.number = "v1.0.4"
  state.version.date = "30th Nov 2017"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
