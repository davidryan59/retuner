export const fontHeightDefault = (state, key) => 11


export const fontHeightTransposing = (state, key) => 10


export const fontStyleDefault = (state, key) => {
  const fontHeight = key.graphics.getFontHeight(state, key)
  return `${fontHeight}px sans-serif`
}


export const fontStyleTransposing = (state, key) => {
  const fontHeight = key.graphics.getFontHeight(state, key)
  return `${fontHeight}px sans-serif`
}
