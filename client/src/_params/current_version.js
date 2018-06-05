const setupCurrentVersion = (state) => {

  state.version.number = "v1.3.3"
  state.version.date = "6th June 2018"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
