# eulerian-trail 

[![NPM][npm-image]][npm-url]

[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] 

> An implementation of Hierholzer’s Algorithm to find an eulerian trail in a graph

## Install

```sh
$ npm install --save eulerian-trail
```

<img src="https://drive.google.com/file/d/0B4UwDRGkGhjacC1yT0hidHpYMzg/view?usp=sharing">

## Usage

```js
var eulerianTrail = require('eulerian-trail');
eulerianTrail({
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 6],
    [6, 7],
    [7, 10],
    [0, 10],
    [8, 10],
    [8, 9],
    [9, 10],
    [5, 8],
    [5, 7],
    [7, 8],
    [5, 6],
    [4, 5],
    [3, 4],
    [1, 3],
    [1, 6]
  ]
});

// output
// [ 0, 1, 2, 3, 6, 7, 10, 8, 5, 6, 1, 3, 4, 5, 7, 8, 9, 10, 0 ]
```

## API

### `eulerianTrail(options)`

**params**

- `options.edges` {Array[]} (required) An array of arrays, each subarray describes an edge in the graph, the edge
must have two primitive elements (numbers and strings are allowed)
- `options.directed=false` {boolean} True to denote the edges as directed, by default all the edges are undirected   

**throws**

The function throws whenever:

- the graph doesn't fulfill the conditions to be have an eulerian cycle or an eulerian graph, the conditions are
  - if it's undirected it must have 0 or 2 odd degree vertices 
  - if it's directed and has the same incoming degree and outgoing degree values and it’s strongly connected or
  for each vertex for each vertex the difference between its incoming degrees and outgoing degrees is 0
  except for 2 vertices whose difference is −1 (start) and +1 (end)
- the trail found doesn't contain all the edges provided in the input

**returns** {Array}

The eulerian trail from a valid start vertex, each pair of contiguous elements in the output denotes an edge  

## License

2015 MIT © [Mauricio Poppe]()

[npm-image]: https://nodei.co/npm/eulerian-trail.png?downloads=true
[npm-url]: https://npmjs.org/package/eulerian-trail
[travis-image]: https://travis-ci.org/maurizzzio/eulerian-trail.svg?branch=master
[travis-url]: https://travis-ci.org/maurizzzio/eulerian-trail
[coveralls-image]: https://coveralls.io/repos/maurizzzio/eulerian-trail/badge.svg
[coveralls-url]: https://coveralls.io/r/maurizzzio/eulerian-trail
[david-image]: https://david-dm.org/maurizzzio/eulerian-trail.svg
[david-url]: https://david-dm.org/maurizzzio/eulerian-trail
