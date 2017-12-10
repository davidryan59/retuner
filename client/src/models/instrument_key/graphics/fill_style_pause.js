import fillStyleButton from './fill_style_button'

const fillStylePause = (state, key) => {
  if (state.control.mainLoopPaused) {
    // Highlighted
    return fillStyleButton(state, key, 1)
  } else {
    // Default
    return fillStyleButton(state, key, 0)
  }
}

export default fillStylePause
