const {middle ,assertArraysEqual} = require('../middle');
// TEST CODE
const a = middle([1]) // => []
const b = middle([1, 2]) // => []
const c = middle([1, 2, 3]) // => [2]
const d = middle([1, 2, 3, 4, 5]) // => [3]
const e = middle([1, 2, 3, 4]) // => [2, 3]
const f = middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArraysEqual([1],a) 
assertArraysEqual([1, 2],b) 
assertArraysEqual([1, 2, 3],c)
assertArraysEqual([1, 2, 3, 4, 5],d)
assertArraysEqual([1, 2, 3, 4],e)
assertArraysEqual([1, 2, 3, 4, 5, 6],f)
