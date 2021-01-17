const {assertEqualTail ,tail}= require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqualTail(result, ["Lighthouse", "Labs","Hello"]);
