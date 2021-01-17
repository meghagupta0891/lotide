// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual')

const eqArrays = function(arr1,arr2) {
    var assertEqualResult = true;
    if(arr1.length !== arr2.length) {
        assertEqualResult = false;
    }
    else {
        for(var i = 0; i < arr1.length; i++) {
          assertEqualResult = assertEqual(arr1[i],arr2[i]);
          if(!assertEqualResult) 
            break;
        }
    }
    console.log(assertEqualResult);
}

module.exports = eqArrays;


