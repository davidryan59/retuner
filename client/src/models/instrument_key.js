import freqToRGBA from "../calculations/freq_to_rgba"

class InstrumentKey {
  constructor(options) {

    // Make sure options is an object
    if (!options) {
      options = {}
    }

    // Setup object structure

    this.coords = {}
    const theCoords = this.coords

    theCoords.canvas = {}
    const theCanvas = theCoords.canvas
    theCanvas.x = 0
    theCanvas.y = 0
    theCanvas.r = 0

    theCoords.model = {}
    const modelCoords = theCoords.model

    modelCoords.force = {}
    const theForce = modelCoords.force
    theForce.neighbours = []
    theForce.x = 0
    theForce.y = 0

    modelCoords.anchor = {}
    const anchorCoords = modelCoords.anchor

    modelCoords.current = {}
    const currentCoords = modelCoords.current

    // Setup instance variables from options
    this.keyboardCode = options.keyboardCode      || ""
    this.symbol = options.symbol                  || ""
    this.functionLabel = options.functionLabel    || ""
    this.runOnPress = options.runOnPress     // If not set, no function is run
    this.runOnRelease = options.runOnRelease
    this.transposePrimes = options.transposePrimes
    const location = options.location
    if (location) {
      // Will draw to screen
      this.drawToScreen = true
      // Will interact with other keys
      this.physicsSwitchedOn = true
      // Set its position and radius
      anchorCoords.x = currentCoords.x = location.x
      anchorCoords.y = currentCoords.y = location.y
      anchorCoords.r = currentCoords.r = location.r + 0.01 * Math.random()
      // r is slightly randomised, due to being used later on in a sort order
      currentCoords.extraR = 1
    }

    // Count number of times this key is pressed
    this.countPresses = 0

    // Firstly, set numerator and denominator if necessary
    // Secondly, calculate stats from these

    if (this.transposePrimes) {
      // Need to calculate numerator and denominator from prime factors
      let num = 1
      let denom = 1
      for (const primeFactorSubArray of this.transposePrimes) {
        const primeNumber = primeFactorSubArray[0]
        const exponent = primeFactorSubArray[1]
        if (exponent < 0) {
          denom *= primeNumber ** -exponent
        } else {
          num *= primeNumber ** exponent
        }
      }
      // Might also want to reduce num & denom
      // by their GCD as an auxiliary check.
      // But wouldn't be necessary if transpose prime arrays
      // are set up correctly
      this.transposes = {}
      this.transposes.num = num
      this.transposes.denom = denom
    }

    if (this.transposes) {
      const num = this.transposes.num
      const denom = this.transposes.denom
      // IMPROVE: Check GCD / HCF of num and denom is 1
      // Otherwise divide out any common factors
      this.transposes.factor = num / denom
      this.transposes.text = num + "/" + denom
      this.transposes.complexity = num * denom

      // Make sure radius of transposing keys is related to
      // their musical importance, which means low complexity
      const theFactor = 10
      anchorCoords.r = 7 + 5 * theFactor * (1 / (theFactor + this.transposes.complexity));
      currentCoords.r = anchorCoords.r
    }

    if (this.transposes) {
      this.nextFreqRel = (state, key) => {
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
      this.nextFreqAbsHz = (state, key) => {
        const baseFreqHz = state.params.baseFrequencyHz
        const nextFreqRel = key.nextFreqRel(state, key)
        return baseFreqHz * nextFreqRel
      }
      this.bgColour = (state, key) => {
        const contrast = state.keyColourContrast.getFraction()
        return freqToRGBA(key.nextFreqRel(state, key), 0.8, contrast)
      }
    } else {
      this.bgColour = (state, key) => {
        return 'rgba(220, 220, 220, 0.5)'
      }
    }
  }

  // toString() {
  //   return `Not yet implemented`
  // }

  aMethod(input) {
    return 42 + input
  }
}

export default InstrumentKey
