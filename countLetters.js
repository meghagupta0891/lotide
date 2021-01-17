const countLetters = function(str) {
    var resultCountLetters = {};
    for (var element of str.toLowerCase()) {
        if(resultCountLetters[element]) {
           resultCountLetters[element]++;
        }
        else {
            resultCountLetters[element] = 1;
        }
    }
    console.log(resultCountLetters);
}

countLetters('this is lighthouse labs');
countLetters('LHl');
module.exports = countLetters;
