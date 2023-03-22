const {
  toOsmand,
  toFurkot,
  colors
} = require('./data');

const schema = [
  [
    'xmlns:osmand', 'https://osmand.net'
  ]
];

function getWptExt({ el, elIfText }) {
  return function* (st) {
    yield* elIfText('osmand:icon', toOsmand[st.sym]);
    yield* el('osmand:displaycolor', null, colors[st.color] || 'Blue');
  };
}

function getTrkExt({ elIfText }) {
  return function* (tr) {
    yield* elIfText('osmand:displaycolor', colors[tr.color]);
  };
}

module.exports = {
  getWptType: st => st.tags?.[0],
  hasWptExt: st => toOsmand[st.sym],
  getWptExt,
  hasTrkExt: tr => colors[tr.color],
  getTrkExt,
  schema,
  toOsmand,
  toFurkot,
  colors
};
