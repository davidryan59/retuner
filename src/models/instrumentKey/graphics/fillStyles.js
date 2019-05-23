import getSustainNumericOption from '../../sustain/getSustainNumericOption'
import freqToRGBA from "../../../calcs/freqToRGBA"


export const fillStyleButton = (state, key, numericOption) => {
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


export const fillStyleDefault = (state, key) => {
  if (key.keyState) {
    return 'rgba(0, 0, 0, 0.7)'
  } else {
    return 'rgba(90, 90, 90, 0.4)'
  }
}


export const fillStyleDemoToggle = (state, key) => {
  if (!state.demo.playing) {
    // Demo OFF, default
    return fillStyleButton(state, key, 0)
  } else {
    // Demo ON
    return fillStyleButton(state, key, 1)
  }
}


export const fillStyleInactive = (state, key) => {
  if (key.keyState) {
    return 'rgba(90, 90, 90, 0.5)'
  } else {
    return 'rgba(170, 170, 170, 0.3)'
  }
}


export const fillStyleKeymap = (state, key) => {

  const loopNumber = state.control.loopsSinceTimeout
  // Updated each browser frame, approx 50 or 60 times a second

  const remA = loopNumber

  const numA = 4
  const loopA = remA % numA
  const remB = (remA - loopA) / numA

  const numB = 6
  const loopB = remB % numB
  const remC = (remB - loopB) / numB

  const numC = 50
  const loopC = remC % numC

  const repeats = 2

  const complicatedBoolean = ((loopB === 1) && (loopC < repeats))
  // Flash for <numA> frames, <repeats> number of times, <numA*numB> times apart,
  // then wait until <numA*numB*numC> before doing it again!

  return (complicatedBoolean) ? 'rgba(180, 255, 128, 0.8)' : fillStyleDefault(state, key)
}


export const fillStylePause = (state, key) => {
  if (state.control.mainLoopPaused) {
    // Highlighted
    return fillStyleButton(state, key, 1)
  } else {
    // Default
    return fillStyleButton(state, key, 0)
  }
}


export const fillStyleSustain = (state, key) => {
  const sustainNumericOption = getSustainNumericOption(state, key)
  if (sustainNumericOption === 0) {
    // Numeric option 0
    // Transposing OFF
    return fillStyleButton(state, key, 1)
  } else if (sustainNumericOption === 1){
    // Numeric option 1
    // Transposing ON* (*except for repeated keys)
    return fillStyleButton(state, key, 0.5)
  } else {
    // Numeric option 2
    // Transposing ON, default
    return fillStyleButton(state, key, 0)
  }
}


export const fillStyleTransposeToggle = (state, key) => {
  if (state.freq.transposing) {
    // Transposing ON, default
    return fillStyleButton(state, key, 0)
  } else {
    // Transposing OFF
    return fillStyleButton(state, key, 1)
  }
}


export const fillStyleTransposing = (state, key) => {
  if (key.activation.allowed(state, key)) {
    const contrast = state.slider.colourContrast.getLinearFraction()
    return freqToRGBA(key.transposes.getNextFreqRel(state, key), 0.8, contrast)
  } else {
    return 'rgba(220, 220, 220, 0.25)'
  }
}
