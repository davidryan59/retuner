const strokeStyleTransposing = (state, key) => {
  if (key.keyState) {
    const id = key._id
    if (state.key.tempPressed && id === state.key.tempPressed._id) {
      return 'rgba(20, 190, 20, 0.9)'
    } else if (state.key.tempMoused && id === state.key.tempMoused._id) {
      return 'rgba(200, 200, 0, 0.9)'
    } else {
      return 'rgba(170, 20, 20, 0.9)'
    }
  } else {
    return 'rgba(20, 20, 120, 0.7)'
  }
}

export default strokeStyleTransposing
