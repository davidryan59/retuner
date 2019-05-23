const textColourDefault = (state, key) => {
  if (key.keyState) {
    return 'rgba(0, 255, 0, 0.6)'
  } else {
    return 'rgba(0, 70, 0, 0.9)'
  }
}

export default textColourDefault
