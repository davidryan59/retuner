const fillStyleDefault = (state, key) => {
  if (key.keyState) {
    return 'rgba(0, 0, 0, 0.7)'
  } else {
    return 'rgba(120, 120, 120, 0.3)'
  }
}

export default fillStyleDefault
