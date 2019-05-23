const setupCurrentVersion = state => {

  state.version.number = "v1.3.6"
  state.version.date = "23rd May 2019"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
