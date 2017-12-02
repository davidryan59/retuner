class Slider {
  constructor(options) {

    this.name = options.name
    this.min = options.min
    this.step = options.step
    this.max = options.max
    this.initial = options.initial

    this.current = options.initial
    this.updated = true
  }

  toString() {
    return `Slider ${this.name} is at position ${this.getCurrent().toFixed(1)}, `
      + `fraction ${this.getFraction().toFixed(3)}`
  }

  getCurrent() {
    return this.current
  }

  setCurrent(newValue) {
    this.current = newValue
    this.updated = true
  }

  getFraction() {
    const diff = this.max - this.min
    return (diff === 0) ? 0 : (this.current - this.min) / diff
  }
}

export default Slider
