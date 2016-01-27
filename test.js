var expect = require('chai').expect;
var flat = require('./index.js');

describe('Test for flatten the nested array', function () {
  it('should return flatten array', function () {
    expect(flat([1, 2, 3, [4, 5, 6, [7, 8, 9]]])).to.eql([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
  });

  it('should return flatten array of strings', function () {
    expect(flat(['v', 'i', 'k', [['r']], ['a', 'm']])).to.eql('vikram'.split(''));
  });

  it('should return same output as input because of invalid input', function () {
    expect(flat('vikram')).to.be.equal('vikram');
    expect(flat(null)).to.be.equal(null);
    expect(flat(1)).to.be.equal(1);
  });
});
