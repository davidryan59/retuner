const setupCurrentVersion = state => {

  state.version.number = "v1.3.7"
  state.version.date = "19th June 2019"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
