const setupCurrentVersion = (state) => {

  state.version.number = "v1.3.1"
  state.version.date = "21st Dec 2017"
  console.log(`Currently on ${state.version.number} (${state.version.date})`)

}

export default setupCurrentVersion
