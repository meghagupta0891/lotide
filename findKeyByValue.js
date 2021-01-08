// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if(actual === expected) {
        console.log('Assertion passed : '+ actual + " == " + expected);
    }
    else {
     console.log("Assertion failed : " + actual + " !== " + expected);
    }
};

const findKeyByValue = function(obj,val) {
    var arr = Object.keys(obj);
    var result;
    for(var i = 0 ; i < arr.length;i++) {
        var currentItem = arr[i];
        if(obj[currentItem] === val) {
           result = currentItem;
        }
    }
    return result;
}

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
