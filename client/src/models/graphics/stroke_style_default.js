const strokeStyleDefault = (state, key) => {
  if (key.keyState) {
    return 'rgba(255, 255, 255, 0.6)'
  } else {
    return 'rgba(0, 0, 0, 0.55)'
  }
}

export default strokeStyleDefault
