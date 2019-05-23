import absDistanceInOctaves from './abs_distance_in_octaves'

const findClosestKeyToFraction = (state, fraction) => {

  const keys = state.key.array

  let storedKey = null
  let storedDistance = 10e12

  for (const key of keys) {
    const newDistance = absDistanceInOctaves(key, fraction)
    if (newDistance < storedDistance) {
      storedDistance = newDistance
      storedKey = key
    }
  }

  return storedKey
}

export default findClosestKeyToFraction
