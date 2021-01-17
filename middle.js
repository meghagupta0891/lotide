// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = require('./assertArraysEqual');
// ACTUAL FUNCTION
const middle = function(arr) {
    var middleValues = []
    if(arr.length > 2) {
        let mid = Math.ceil(arr.length/2) - 1;
        middleValues.push(arr[mid]);
        if(arr.length % 2 === 0) {   
            middleValues.push(arr[mid+1])
        }
     }
     console.log(middleValues);
     return middleValues;
}

module.exports = {middle, assertArraysEqual};

