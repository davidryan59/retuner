const setupCurrentVersion = (state) => {

  state.version.number = "v1.3.4"
  state.version.date = "25th Dec 2018"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
