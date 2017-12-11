const setupCurrentVersion = (state) => {

  state.version = {}
  state.version.number = "v1.1.3"
  state.version.date = "11th Dec 2017"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
