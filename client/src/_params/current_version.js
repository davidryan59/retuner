const setupCurrentVersion = (state) => {


  state.version.number = "v1.3.0"
  state.version.date = "18th Dec 2017"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
