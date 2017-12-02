const setupCurrentVersion = (state) => {

  state.version = {}
  state.version.number = "v1.0.6"
  state.version.date = "2nd Dec 2017"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
