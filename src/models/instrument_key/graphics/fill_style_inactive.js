const fillStyleInactive = (state, key) => {
  if (key.keyState) {
    return 'rgba(90, 90, 90, 0.5)'
  } else {
    return 'rgba(170, 170, 170, 0.3)'
  }
}

export default fillStyleInactive
