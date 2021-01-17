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
  head,
  tail,
  middle,
  assertArraysEqual,
  eqArrays,
  letterPositions,
  assertEqual,
  eqObjects,
  map,
  assertObjectsEqual,
  findKeyByValue,
  countLetters,
  countOnly,
  without
};
