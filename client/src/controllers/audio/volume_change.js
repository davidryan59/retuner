import setVolumeDB from '../sliders/set_volume_db'

const volumeChange = (state, unitsToIncrease) => {

  const stateDB = state.dB

  const currentDB = stateDB.current
  const stepDB = stateDB.step

  const newDB = currentDB + stepDB * unitsToIncrease

  // console.log(`Changing volume from ${currentDB.toFixed(1)} dB to ${newDB.toFixed(1)} dB`)
  setVolumeDB(state, newDB)

}

export default volumeChange
