var expect = require('chai').expect
  , has = require('./')

describe('has', function() {
  it('should check if obj has own prop', function() {
    var o = { lorem: 'ipsum' }
    expect(has(o, 'lorem')).to.be.true
    expect(has(o, 'dolor')).to.be.false
  })
})