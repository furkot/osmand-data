const data = require('..');

describe('furkot osmand data', function () {
  it('should be an object', function () {
    data.should.have.property('toFurkot').be.type('object');
    data.should.have.property('toOsmand').be.type('object');
    data.should.have.property('colors').be.type('object');
  });


  it('should be consistent', function () {
    Object
      .keys(data.toFurkot)
      .forEach(osmandIcon => {
        const furkotIcon = data.toFurkot[osmandIcon];
        osmandIcon.should.eql(data.toOsmand[furkotIcon]);
      });
  });

});
