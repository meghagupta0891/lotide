// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual')

const assertArraysEqual = function(arr1,arr2) {
    var assertEqualResult = true;
    if(arr1.length !== arr2.length) {
        assertEqualResult = false;
        console.log("Assertion failed: Arrays are not same in length");
    }
    else {
        for(var i = 0; i < arr1.length; i++) {
          assertEqualResult = assertEqual(arr1[i],arr2[i]);
          if(!assertEqualResult) 
            break;
        }
        if(assertEqualResult){
            console.log("Assertion passed: Arrays have same length and are equal");
        }
        else {
            console.log("Assertion failed: Arrays have same length but not equal");
        }
    }
   
}

module.exports = assertArraysEqual;

