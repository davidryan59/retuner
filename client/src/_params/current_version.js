const setupCurrentVersion = (state) => {

  state.version = {}
  state.version.number = "v1.0.8"
  state.version.date = "3rd Dec 2017"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
