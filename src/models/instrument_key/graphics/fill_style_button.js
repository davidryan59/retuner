import fillStyleDefault from './fill_style_default'

const fillStyleButton = (state, key, numericOption) => {
  // Options accepted include:
  // 0 (default)
  // 1 (button pressed)
  // 0.5 (button half pressed, e.g. 3 state toggle)
  if (numericOption === 1) {
    if (key.keyState) {
      return 'rgba(45, 0, 45, 0.7)'
    } else {
      return 'rgba(90, 0, 90, 0.4)'
    }
  } else if (numericOption === 0.5) {
    if (key.keyState) {
      return 'rgba(45, 15, 45, 0.7)'
    } else {
      return 'rgba(90, 30, 90, 0.4)'
    }
  } else {
    // Greys 90 off, 0 on
    return fillStyleDefault(state, key)
  }
}

export default fillStyleButton
