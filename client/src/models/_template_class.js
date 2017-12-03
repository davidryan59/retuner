class TemplateClass {
  constructor(options) {

    if (!options) {
      options = {}
    }

    this.genericVariable = options.genericVariable       || "Default value"

    this.otherVariable = anAssignment
    this.otherBoolean = true
  }

  toString() {
    return `Not yet implemented`
  }

  aMethod(input) {
    return 42 + input
  }
}

export default TemplateClass
