var file = require("../lib/playground.js");
var should = require("should");
var assert = require("assert");
var ke = new file.Equipment();

describe('Kitchen', function () {
  it('should add', function () {
    ke.addEquipment('oven', 1000);
    ke.addEquipment('stove', 1000);
    should.equal(ke.getCount(), 2);
  })

  it('should get total cost', function () {
    should.equal(ke.getCost(), 2000);
  })

  it('should get string', function () {
    should.equal(ke.Stringify(), "oven stove ");
  })

  it('should remove', function () {
    ke.removeEquipment('stove');
    should.equal(ke.getCount(), 1);
  })
})
