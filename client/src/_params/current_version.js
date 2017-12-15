const setupCurrentVersion = (state) => {

  state.version = {}
  state.version.number = "v1.2.6"
  state.version.date = "16th Dec 2017"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
