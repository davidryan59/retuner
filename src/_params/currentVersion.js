const setupCurrentVersion = state => {

  state.version.number = "v1.3.9"
  state.version.date = "8th January 2020"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
