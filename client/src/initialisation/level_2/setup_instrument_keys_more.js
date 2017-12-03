import calculateNeighbouringKeys from '../../physics/calculate_neighbouring_keys'

const setupInstrumentKeysMore = (state) => {

  calculateNeighbouringKeys(state)

  state.keyLastPressed = null
  state.keyOrderArray = []
  const indexArray = state.keyOrderArray
  for (const i in state.keys) {
    indexArray.push(i)
  }
  // console.log(`Original key order ${indexArray}`)

  indexArray.sort((i1, i2) => {
    return (
      state.keys[i1].coords.model.current.r
      - state.keys[i2].coords.model.current.r
    )
  })
  // console.log(`Index array after sorting is ${indexArray}`)

  console.log('Instrument key set setup some more')

}

export default setupInstrumentKeysMore
