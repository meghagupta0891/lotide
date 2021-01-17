const assert = require('chai').assert;
const {middle ,assertArraysEqual} = require('../middle');
// TEST CODE
const a = middle([1]) // => []
const b = middle([1, 2]) // => []
const c = middle([1, 2, 3]) // => [2]
const d = middle([1, 2, 3, 4, 5]) // => [3]
const e = middle([1, 2, 3, 4]) // => [2, 3]
const f = middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
describe("#middle", () => {
    it("returns [] for [1]", () => {
      assert.deepEqual(middle([1]), []);
    });
    it("returns [] for [1,2]", () => {
      assert.deepEqual(middle([1,2]), []);
    });
    it("returns [2] for [1,2,3]", () => {
        assert.deepEqual(middle([1,2,3]), [2]);
    });
    it("returns [3] for [1,2,3,4,5]", () => {
        assert.deepEqual(middle([1,2,3,4,5]), [3]);
    });
    it("returns [2,3] for [1,2,3,4]", () => {
        assert.deepEqual(middle([1,2,3,4]), [2,3]);
    });
    it("returns [3,4] for [1,2,3,4,5,6]", () => {
        assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
    });
});