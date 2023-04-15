const should = require('should');
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
    Object.entries(Object
      .entries(data.toOsmand)
      .reduce((result, [, osmandIcon]) => {
        result[osmandIcon] = result[osmandIcon] || 0;
        result[osmandIcon] += 1;
        return result;
      }, {}))
      .forEach(([osmandIcon, counter]) => {
        if (counter > 1) {
          const furkotIcon = data.toFurkot[osmandIcon];
          should.exist(furkotIcon, osmandIcon);
          data.toOsmand[furkotIcon].should.eql(osmandIcon);
        }
        else {
          should.not.exist(data.toFurkot[osmandIcon]);
        }
      });
  });

});
