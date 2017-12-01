const setupCurrentVersion = (state) => {

  state.version = {}
  state.version.number = "v1.0.5"
  state.version.date = "1st Dec 2017"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
