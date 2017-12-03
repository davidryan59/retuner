import calculateNeighbouringKeys from '../../physics/calculate_neighbouring_keys'

const setupInstrumentKeysMore = (state) => {

  calculateNeighbouringKeys(state)

  const stateKey = state.key
  const indexArray = stateKey.indexOrderArray
  const keyArray = stateKey.array
  for (const i in keyArray) {
    indexArray.push(i)
  }
  // console.log(`Original key order ${indexArray}`)

  indexArray.sort((i1, i2) => {
    return (
      keyArray[i1].coords.model.current.r
      - keyArray[i2].coords.model.current.r
    )
  })
  // console.log(`Index array after sorting is ${indexArray}`)

  console.log('Instrument key set setup some more')

}

export default setupInstrumentKeysMore
