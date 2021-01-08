const letterPositions = function(str) {
    const results = {};
    // logic to update results here
    for (var i = 0 ; i < str.toLowerCase().length ; i++) {
        var currentItem = str[i];
        if(currentItem == ' ') {
            continue;
        }
        if(!results[currentItem]) {
            results[currentItem] = [];
        }
        results[currentItem].push(i);
    }
    console.log(results);
    return results;
  };
  
  letterPositions('this is lighthouse labs');