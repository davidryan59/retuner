import volumeSet from './volume_set'

const volumeChange = (state, unitsToIncrease) => {

  const stateDB = state.dB

  const currentDB = stateDB.current
  const stepDB = stateDB.step

  const newDB = currentDB + stepDB * unitsToIncrease

  console.log(`Changing volume from ${currentDB.toFixed(1)} dB to ${newDB.toFixed(1)} dB`)
  volumeSet(state, newDB)

}

export default volumeChange
