const assertEqual = function(actual, expected) {
    if(actual === expected) {
        return true;
    }
    else {
        return false;
    }
 };


 const tail = function(arr) {
    if(!arr || arr.length == 0 || arr.length == 1) {
        console.log('tail is undefined');
        return [];
    }
    else {
        var tailArr = arr.slice(1,arr.length + 1);
        console.log('tail is ' + tailArr);
        return tailArr;
    }
}

const assertEqualTail = function(tail,targetArr) {
    var assertEqualResult = true;
    if(tail.length != targetArr.length) {
        assertEqualResult = false;
    }
    else {
        for(var i = 0; i < result.length - 1; i++) {
          asertEqualResult = assertEqual(tail[i],targetArr[i]);
          if(!assertEqualResult)
            break;
        }
    }
    if(assertEqualResult) {
        console.log('Assertion passed : '+ tail + " == " + targetArr);
    }
    else {
        console.log('Assertion failed : '+ tail + " !== " + targetArr);
    }
}
module.exports = {assertEqualTail,tail};
