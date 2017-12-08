import calculateNeighbouringKeys from '../physics/calculate_neighbouring_keys'

const setupKeyInteractions = (state) => {

  // Keys interact with nearby keys
  calculateNeighbouringKeys(state)

  // Keys are not drawn directly, but via a separate permutation array
  // which might get reordered
  const stateKey = state.key
  const indexArray = stateKey.indexOrderArray
  const keyArray = stateKey.array
  for (const i in keyArray) {
    indexArray.push(i)
  }
  // console.log(`Original key order ${indexArray}`)

  // Keys have a sort order depending (at the moment) on radius
  indexArray.sort((i1, i2) => {
    return (
      keyArray[i1].coords.model.current.r
      - keyArray[i2].coords.model.current.r
    )
  })
  // console.log(`Index array after sorting is ${indexArray}`)

  console.log('Instrument keys have neighbours calculated and are sorted')

}

export default setupKeyInteractions
