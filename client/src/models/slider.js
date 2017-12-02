class Slider {
  constructor(options) {

    if (!options) {
      options = {}
    }

    this.name = options.name       || "Generic slider"
    this.min = options.min         || 0
    this.step = options.step       || 1
    this.max = options.max         || 9
    this.initial = options.initial || 5
    this.unit = options.unit       || ""

    this.current = this.initial
    this.updated = true
  }

  toString() {
    const unitText = (this.unit) ? " " + this.unit : ""
    return `Slider ${this.name} is at position `
      + `${this.getCurrent().toFixed(1)}${unitText}, `
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
