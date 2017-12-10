import fillStyleButton from './fill_style_button'

const fillStyleTransposeToggle = (state, key) => {
  if (state.freq.transposing) {
    // Transposing ON, default
    return fillStyleButton(state, key, 0)
  } else {
    // Transposing OFF
    return fillStyleButton(state, key, 1)
  }
}

export default fillStyleTransposeToggle
