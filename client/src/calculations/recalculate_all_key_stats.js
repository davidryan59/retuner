import recalculateKeyStats from './recalculate_key_stats'

const recalculateAllKeyStats = (state) => {

  for (const key of state.keys) {
    recalculateKeyStats(key)
  }

}

export default recalculateAllKeyStats
