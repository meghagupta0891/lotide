// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if(actual === expected) {
        console.log('Assertion passed : '+ actual + " == " + expected);
    }
    else {
     console.log("Assertion failed : " + actual + " !== " + expected);
    }
 };

 const head = function(arr) {
     if(!arr || arr.length == 0) {
         console.log('head is undefined');
         return null;
     }
     else {
         console.log('head is ' + arr[0]);
         return(arr[0]);
     }
 }
 
 // TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

 