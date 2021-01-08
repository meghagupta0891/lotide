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

const without = function(source,itemsToRemove) {
   var result = [];
   if(assertEqual(source.length,0)) {
       result = [];
   }
   else if(assertEqual(itemsToRemove.length,0)) {
       result = source;
   }
   else {
        for(var i = 0; i < source.length ; i++) {
            if(itemsToRemove.indexOf(source[i]) < 0) {
                result.push(source[i]);
            }
        }
   }
   console.log(result);
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
