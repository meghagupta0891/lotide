// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if(actual === expected) {
        return true;
    }
    else {
        return false;
    }
};

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

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false


