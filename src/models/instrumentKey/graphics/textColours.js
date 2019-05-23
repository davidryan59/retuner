export const textColourDefault = (state, key) => {
  if (key.keyState) {
    return 'rgba(0, 255, 0, 0.6)'
  } else {
    return 'rgba(0, 70, 0, 0.9)'
  }
}


export const textColourTransposing = (state, key) => {
  // return 'rgba(30, 0, 30, 0.95)'
  // Need maximum clarity on the keys!
  return 'rgba(0, 0, 0, 1)'
}
