const setupFrequencies = (state) => {
  // Setup some default parameters
  // Base frequency is now in Important parameters
  // Currently (30th Nov 2017) set to 256 Hz
  const minFreq = 4.5 / 256            // Relative: (9/8)*(1/64). Absolute: 4.5 Hz
  const originalFreq = 2**8 / 256      // Relative: 1/1. Absolute: 256 Hz
  const maxFreq = 2**12 / 256          // Relative: 16/1. Absolute: 4096 Hz
  const transposing = true            // false disables transposing every key press
  const keyReleaseEndsNote = false     // false means keys are sustained
  const keyEndsPreviousPress = false   // false means one key can generate multiple tones
  // Save them into the state
  state.freqs = {}
  const stateFreqs = state.freqs
  stateFreqs.minFreq = minFreq
  stateFreqs.originalFreq = originalFreq
  stateFreqs.maxFreq = maxFreq
  stateFreqs.transposing = transposing
  stateFreqs.keyReleaseEndsNote = keyReleaseEndsNote
  stateFreqs.keyEndsPreviousPress = keyEndsPreviousPress
  // Current frequency stuff
  stateFreqs.current = {}
  stateFreqs.current.freq = originalFreq

  stateFreqs.current.transposePrimes = [[2, 0], [3, 0]]
  // DUMMY! Fix this later. Should be related to originalFreq
  // Maybe originalFreq should always be 1?
  // so get rid of that variable?

  console.log("Frequencies initialised")
}

export default setupFrequencies
