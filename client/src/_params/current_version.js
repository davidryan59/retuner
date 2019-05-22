const setupCurrentVersion = (state) => {

  state.version.number = "v1.3.4"
  state.version.date = "22nd May 2019"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
