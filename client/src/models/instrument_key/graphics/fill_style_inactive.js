const fillStyleInactive = (state, key) => {
  if (key.keyState) {
    return 'rgba(0, 0, 0, 0.5)'
  } else {
    return 'rgba(140, 140, 140, 0.3)'
  }
}

export default fillStyleInactive
