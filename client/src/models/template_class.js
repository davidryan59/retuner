var TemplateClass = function(input_object) {
  this.name = input_object.name
}

TemplateClass.prototype.templateFunction = function() {
  return 567
}

module.exports = TemplateClass
