const fontStyleDefault = (state, key) => {
  const fontHeight = key.graphics.getFontHeight(state, key)
  return `${fontHeight}px sans-serif`
}

export default fontStyleDefault
