import freqToRGBA from "../../calculations/freq_to_rgba"

const initialiseAKey = (key) => {

  // Make sure key is setup to display and to run physics
  key.physicsSwitchedOn = true
  // Might occasionally want some keys to not display,
  // then set this to false.

  // Slightly randomise the radius,
  // don't want any radii being exactly equal
  // since this variable gets sorted on later
  key.location.r += 0.1 * Math.random()

  // When button is pressed it gets bigger. Record that in this factor
  key.location.extraR = 1

  // Count number of times a key is pressed
  key.countPresses = 0

  // Record which keys are near each other, so they can exert force on each other
  key.force = {}
  key.force.neighbours = []
  key.force.x = 0
  key.force.y = 0

  // Record the original size and position
  // to be used in animation later
  key.anchors = {}
  key.anchors.x = key.location.x
  key.anchors.y = key.location.y
  key.anchors.r = key.location.r

  // Make somewhere to put canvas coords of instrument keys
  key.canvas = {}
  key.canvas.x = 0
  key.canvas.y = 0
  key.canvas.r = 0

  // Firstly, set numerator and denominator if necessary
  // Secondly, calculate stats from these

  if (key.transposePrimes && !key.transposes) {
    // Need to calculate numerator and denominator from prime factors
    let num = 1
    let denom = 1
    for (const primeFactorSubArray of key.transposePrimes) {
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
    key.transposes = {}
    key.transposes.num = num
    key.transposes.denom = denom
  }

  if (key.transposes) {
    const num = key.transposes.num
    const denom = key.transposes.denom
    // IMPROVE: Check GCD / HCF of num and denom is 1
    // Otherwise divide out any common factors
    key.transposes.factor = num / denom
    key.transposes.text = num + "/" + denom
    key.transposes.complexity = num * denom

    // Make sure radius of transposing keys is related to
    // their musical importance, which means low complexity
    const theFactor = 10
    key.anchors.r = 7 + 5 * theFactor * (1 / (theFactor + key.transposes.complexity));
    key.location.r = key.anchors.r
  }

  if (key.transposes) {
    key.nextFreq = (state, key) => {
      // Things like bounding by min and max are done here.
      const keyFreq = key.transposes.factor
      const baseFreq = state.freqs.currentFreq
      const maxFreq = state.freqs.maxFreq
      const minFreq = state.freqs.minFreq
      let actualNextFreq = keyFreq * baseFreq
      actualNextFreq = Math.min(maxFreq, actualNextFreq)
      actualNextFreq = Math.max(minFreq, actualNextFreq)
      return actualNextFreq
    }
    key.bgColour = (state, key) => {
      return freqToRGBA(key.nextFreq(state, key), 0.8)
    }
  } else {
    key.bgColour = (state, key) => {
      return 'rgba(220, 220, 220, 0.5)'
    }
  }

}

export default initialiseAKey
