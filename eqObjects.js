// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if(actual === expected) {
       return true;
    }
    else {
       return false;
    }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
   var result = true;
   if(assertEqual(Object.keys(object1).length,Object.keys(object2).length)) {
      var arrObj1 = Object.keys(object1);
      for(var i = 0; i < arrObj1.length ; i++) {
          var currentItem = arrObj1[i];
          if(!assertEqual(object1[currentItem],object2[currentItem])){
              result = false;
              break;
          }
      }
   }
   else {
       result = false;
   }
   console.log(result);
   return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
