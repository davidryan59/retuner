import numToFixedTotalLength from '../calculations/num_to_fixed_total_length'

class Slider {
  constructor(options) {

    if (!options) {
      options = {}
    }

    this.id = options.id               || ""  // Prevents controller creation
    this.label = options.label         || "Value"
    this.min = options.min             || 0
    this.max = options.max             || 9
    this.initial = options.initial     || 5
    this.unit = options.unit           || ""

    // Deal with discrete gradations
    // Option 'step' is how big each step is
    // OR Option 'points' is how many points there are
    this.step = options.step
    if (!this.step) {
      this.points = options.points || 10                     // Default 10 points
      this.points = Math.max(2, Math.round(this.points))     // No less than 2 points
      this.step = (this.max - this.min) / (this.points - 1)  // Calculate step size from points
      this.step -= 10e-8                                     // Make sure final point is available!
    }

    const digitsMin = 1 + Math.floor(Math.log10(Math.abs(this.min))) + ((this.min < 0) ? 1 : 0);
    const digitsMax = 1 + Math.floor(Math.log10(Math.abs(this.max))) + ((this.max < 0) ? 1 : 0);
    this.numLength = options.numLength       || Math.max(digitsMin, digitsMax);

    this.redraw = true

    this.logScale = false
    const logScale = options.logScale
    if (logScale) {
      if (0 < this.min && this.min < this.max) {
        this.logScale = true
        this.logFactor = this.max / this.min
      }
    }

    // this.current = this.initial
    this.current = this.getCurrent(this.initial)
  }

  toString() {
    const unitText = (this.unit) ? " " + this.unit : ""
    return `${this.label} is at position `
      + `${this.getValue().toFixed(1)}${unitText}, `
      + `fraction ${this.getLinearFraction().toFixed(3)}`
  }

  setValue(newValue) {
    // Uses log or linear position.
    // Use this one when setting an actual value, e.g. speed = 160 bpm
    this.setCurrent(this.getCurrent(newValue))
  }

  setCurrent(newCurrent) {
    // Uses linear position only.
    // Use this one when setting from a UI interface
    const oldValue = this.current
    const checkedNewValue = Math.max(this.min, Math.min(this.max, newCurrent))
    if (checkedNewValue !== oldValue) {
      this.current = checkedNewValue
      this.redraw = true
      console.log(`${this}`)
    }
  }

  increaseBySteps(unitIncrease) {
    this.setCurrent(this.current + unitIncrease * this.step)
  }

  getLinearFraction() {
    const diff = this.max - this.min
    return (diff === 0) ? 0 : (this.current - this.min) / diff
  }

  getLinearValue() {
    return this.current
  }

  getValue() {
    if (this.logScale) {
      // For log model (optional), its a scaled value
      return Math.round(this.min * (this.logFactor ** this.getLinearFraction()))
      // return this.min * (this.logFactor ** this.getLinearFraction())
    } else {
      // For linear model (default), its just the current value
      return this.getLinearValue()
    }
  }

  getCurrent(value) {
    if (this.logScale) {
      // For log model (optional), its a scaled value
      const diff = this.max - this.min
      const linearFraction = Math.log(value / this.min) / Math.log(this.logFactor)
      return this.min + linearFraction * diff
    } else {
      // For linear model (default), its just the value
      return value
    }
  }

  getDisplayText() {
    // Non-breaking space here
    const unitText = (this.unit) ? "\u00a0" + this.unit : ""
    const theText = numToFixedTotalLength(this.getValue(), this.numLength)
    return `${theText}${unitText}`
  }

  getLabelText() {
    return this.label
  }

}

export default Slider
