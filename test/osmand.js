import test from 'node:test';
import data from '../lib/index.js';

test('should be an object', t => {
  t.assert.equal(typeof data.toFurkot, 'object');
  t.assert.equal(typeof data.toOsmand, 'object');
  t.assert.equal(typeof data.colors, 'object');
});

test('should be consistent', t => {
  Object.keys(data.toFurkot).forEach(osmandIcon => {
    const furkotIcon = data.toFurkot[osmandIcon];
    t.assert.deepEqual(osmandIcon, data.toOsmand[furkotIcon]);
  });
  Object.entries(
    Object.entries(data.toOsmand).reduce((result, [, osmandIcon]) => {
      result[osmandIcon] = result[osmandIcon] || 0;
      result[osmandIcon] += 1;
      return result;
    }, {})
  ).forEach(([osmandIcon, counter]) => {
    if (counter > 1) {
      const furkotIcon = data.toFurkot[osmandIcon];
      t.assert.ok(furkotIcon != null, osmandIcon);
      t.assert.deepEqual(data.toOsmand[furkotIcon], osmandIcon);
    } else {
      t.assert.equal(data.toFurkot[osmandIcon], undefined, 'should not exist');
    }
  });
});
