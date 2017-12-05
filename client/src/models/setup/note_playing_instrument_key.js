import instrumentKeyPress from "../../controllers/keys/instrument_key_press"
import instrumentKeyRelease from "../../controllers/keys/instrument_key_release"

import reduceFraction from "../../maths/reduce_fraction"
import freqToRGBA from "../../calculations/freq_to_rgba"

const setupNotePlayingInstrumentKey = (state, key, options) => {

  const fractionObject = options.fraction

  key.runOnPress = instrumentKeyPress
  key.runOnRelease = instrumentKeyRelease

  key.transposes = {}
  const [num, denom] = reduceFraction(fractionObject.num, fractionObject.denom)
  key.transposes.num = num
  key.transposes.denom = denom
  key.transposes.factor = num / denom
  key.transposes.text = num + "/" + denom
  key.transposes.complexity = num * denom

  // Make sure radius of transposing keys is related to
  // their musical importance, which means low complexity
  const anchorCoords = key.coords.model.anchor
  const currentCoords = key.coords.model.current
  const theFactor = 10
  currentCoords.r += 1 + 4 * theFactor * (1 / (theFactor + key.transposes.complexity))
  anchorCoords.r = currentCoords.r

  key.nextFreqRel = (state, key) => {
    // Things like bounding by min and max are done here.
    const keyFreq = key.transposes.factor
    const baseFreqHz = state.params.baseFrequencyHz
    const instrumentFreq = state.freqs.current.freq
    const maxFreq = state.freqs.maxFreq
    const minFreq = state.freqs.minFreq
    let actualNextFreq = keyFreq * instrumentFreq
    actualNextFreq = Math.min(maxFreq, actualNextFreq)
    actualNextFreq = Math.max(minFreq, actualNextFreq)
    return actualNextFreq
  }

  key.nextFreqAbsHz = (state, key) => {
    const baseFreqHz = state.params.baseFrequencyHz
    const nextFreqRel = key.nextFreqRel(state, key)
    return baseFreqHz * nextFreqRel
  }

  key.bgColour = (state, key) => {
    const contrast = state.slider.keyColourContrast.getFraction()
    return freqToRGBA(key.nextFreqRel(state, key), 0.8, contrast)
  }

}

export default setupNotePlayingInstrumentKey
