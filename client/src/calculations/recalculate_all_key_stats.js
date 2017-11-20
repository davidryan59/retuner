import recalculateKeyStats from './recalculate_key_stats'
import recalculateNeighbours from './recalculate_neighbours'

const recalculateAllKeyStats = (state) => {

  for (const key of state.keys) {
    recalculateKeyStats(key)
  }
  recalculateNeighbours(state)

  state.keyLastPressed = null
  state.keyOrderArray = []
  const indexArray = state.keyOrderArray
  for (const i in state.keys) {
    indexArray.push(i)
  }
  console.log(`Original key order ${indexArray}`)

  indexArray.sort((i1, i2) => {
    return ( state.keys[i1].location.r - state.keys[i2].location.r )
  })
  console.log(`Index array after sorting is ${indexArray}`)

}

export default recalculateAllKeyStats
