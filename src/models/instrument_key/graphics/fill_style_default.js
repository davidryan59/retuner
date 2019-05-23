const fillStyleDefault = (state, key) => {
  if (key.keyState) {
    return 'rgba(0, 0, 0, 0.7)'
  } else {
    return 'rgba(90, 90, 90, 0.4)'
  }
}

export default fillStyleDefault
