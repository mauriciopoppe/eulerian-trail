'use strict';

var assert = require('assert');

var eulerianTrail = require('../');

describe('eulerianTrail', function () {
  it('should compute the eulerian trail of undirected graphs', function () {
    var trail;
    trail = eulerianTrail({
      edges: [
        [0, 1]
      ]
    });
    assert(trail.length === 2);

    trail = eulerianTrail({
      edges: [
        [0, 1],
        [0, 1],
        [0, 1],
        [0, 1],
        [0, 1],
        [0, 1]
      ]
    });
    assert(trail.length === 7);

    trail = eulerianTrail({
      edges: [
        [0, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 4],
        [3, 4],
        [4, 5]
      ]
    });
    assert(trail.length === 8);

    trail = eulerianTrail({
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
    assert(trail.length === 19);

    assert.throws(function () {
      eulerianTrail({
        edges: [
          ['a', 'b'],
          ['a', 'b'],
          ['c', 'b'],
          ['c', 'b'],
          ['a', 'd'],
          ['b', 'd'],
          ['c', 'd']
        ]
      });
    });
  });

  it('should compute the eulerian trail of directed graphs', function () {
    var trail;
    trail = eulerianTrail({
      directed: true,
      edges: [
        [0, 1]
      ]
    });
    assert(trail.length === 2);

    trail = eulerianTrail({
      directed: true,
      edges: [
        [0, 1],
        [0, 1],
        [1, 0],
        [1, 0]
      ]
    });
    assert(trail.length === 5);

    assert.throws(function () {
      eulerianTrail({
        directed: true,
        edges: [
          [0, 1],
          [1, 2],
          [1, 3],
          [1, 4],
          [2, 4],
          [3, 4],
          [4, 5]
        ]
      });
    });

    trail = eulerianTrail({
      directed: true,
      edges: [
        [0, 1],
        [1, 2],
        [2, 4],
        [4, 3],
        [3, 1],
        [1, 4],
        [4, 5]
      ]
    });
    assert(trail.length === 8);
  });
});
