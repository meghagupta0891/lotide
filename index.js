// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const letterPositions = require('./letterPositions');
const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');
const map = require('./map');
const assertObjectsEqual = require('./assertObjectsEqual');
const findKeyByValue = require('./findKeyByValue');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  eqArrays : eqArrays,
  letterPositions : letterPositions,
  assertEqual : assertEqual,
  eqObjects : eqObjects,
  map : map,
  assertObjectsEqual : assertObjectsEqual,
  findKeyByValue : findKeyByValue,
  countLetters : countLetters,
  countOnly : countOnly,
  without : without
};
