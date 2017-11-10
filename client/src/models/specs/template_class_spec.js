var TemplateClass = require('../template_class.js')
var assert = require('assert')

describe('TemplateClass', function(){
  var theObject

  beforeEach(function(){
    setupObject = {name: "I'm a template object"}
    theObject = new TemplateClass(setupObject)
  })

  it('has a name', function(){
    assert.strictEqual("I'm a template object", theObject.name)
  })

  it('has a working function', function(){
    assert.strictEqual(567, theObject.templateFunction())
  })

})
