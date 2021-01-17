const assertEqual = require('./assertEqual');

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

 module.exports = head;