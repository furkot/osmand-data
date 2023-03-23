[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# @furkot/osmand-data

Data used by [Furkot] modules dealing with [OsmAnd GPX] format.

## Install

```sh
$ npm install --save @furkot/osmand-data
```

## Usage

Furkot pin symbols are characters in [furkot-icon-font] - see [here][furkot-icon-font-demo].

```js
var data = require('@furkot/osmand-data');

console.log(data.toFurkot['building_type_church']); // === 34
console.log(data.toOsmand['34']);                   // === 'building_type_church'

```

## License

MIT © [Natalia Kowalczyk](https://melitele.me)

[Furkot]: https://furkot.com
[furkot-icon-font]: https://github.com/furkot/icon-fonts
[furkot-icon-font-demo]: https://furkot.github.io/icon-fonts/build/furkot.html

[OsmAnd GPX]: https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx/

[npm-image]: https://img.shields.io/npm/v/@furkot/osmand-data
[npm-url]: https://npmjs.org/package/@furkot/osmand-data

[build-url]: https://github.com/furkot/osmand-data/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/furkot/osmand-data/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/@furkot/osmand-data
[deps-url]: https://libraries.io/npm/@furkot%2Fosmand-data
