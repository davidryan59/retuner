import fillStyleDefault from './fill_style_default'

const fillStyleTransposeToggle = (state, key) => {
  if (state.freq.transposing) {
    return fillStyleDefault(state, key)
  } else {
    if (key.keyState) {
      return 'rgba(0, 0, 45, 0.8)'
    } else {
      return 'rgba(0, 0, 90, 0.5)'
    }
  }
}

export default fillStyleTransposeToggle
