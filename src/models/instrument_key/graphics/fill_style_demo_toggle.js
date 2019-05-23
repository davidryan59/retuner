import fillStyleButton from './fill_style_button'

const fillStyleDemoToggle = (state, key) => {
  if (!state.demo.playing) {
    // Demo OFF, default
    return fillStyleButton(state, key, 0)
  } else {
    // Demo ON
    return fillStyleButton(state, key, 1)
  }
}

export default fillStyleDemoToggle
