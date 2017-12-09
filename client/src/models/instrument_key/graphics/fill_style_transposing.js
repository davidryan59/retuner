import freqToRGBA from "../../../calculations/freq_to_rgba"

const fillStyleTransposing = (state, key) => {
  if (key.activation.allowed(state, key)) {
    const contrast = state.slider.colourContrast.getFraction()
    return freqToRGBA(key.transposes.getNextFreqRel(state, key), 0.8, contrast)
  } else {
    return 'rgba(220, 220, 220, 0.25)'
  }
}

export default fillStyleTransposing
