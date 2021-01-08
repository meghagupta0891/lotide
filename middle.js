// TEST/ASSERTION FUNCTIONS
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


