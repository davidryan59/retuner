const setupCurrentVersion = state => {

  state.version.number = "v1.3.8"
  state.version.date = "20th December 2019"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
