const strokeStyleHighlight = (state, key) => {
  if (key.keyState) {
    return 'rgba(128, 128, 0, 1)'
  } else {
    return 'rgba(255, 255, 0, 1)'
  }
}

export default strokeStyleHighlight
