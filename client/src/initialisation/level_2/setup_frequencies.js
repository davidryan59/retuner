const setupFrequencies = (state) => {
  // Setup some default parameters
  // Base frequency is now in Important parameters
  // Currently (30th Nov 2017) set to 256 Hz
  const minFreq = 4.5 / 256            // Relative: (9/8)*(1/64). Absolute: 4.5 Hz
  const maxFreq = 2**12 / 256          // Relative: 16/1. Absolute: 4096 Hz
  const transposing = true            // false disables transposing every key press
  const keyReleaseEndsNote = false     // false means keys are sustained
  const keyEndsPreviousPress = false   // false means one key can generate multiple tones
  // Save them into the state
  state.freqs = {}
  const stateFreqs = state.freqs
  stateFreqs.minFreq = minFreq
  stateFreqs.maxFreq = maxFreq
  stateFreqs.transposing = transposing
  stateFreqs.keyReleaseEndsNote = keyReleaseEndsNote
  stateFreqs.keyEndsPreviousPress = keyEndsPreviousPress
  // Current frequency stuff
  stateFreqs.current = {}
  stateFreqs.current.freq = 1

  stateFreqs.current.transposePrimes = [[2, 0], [3, 0]]
  // DUMMY! Fix this later. Not sure how primes will be stored.

  console.log("Frequencies initialised")
}

export default setupFrequencies
