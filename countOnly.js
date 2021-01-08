const assertEqual = function(actual, expected) {
    if(actual === expected) {
        console.log(true);
    }
    else {
        console.log(false);
    }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
    var items = Object.keys(itemsToCount);
    var finalItems = {};
    for(var i = 0 ; i < items.length ; i++) {
        let currentItem = items[i];
        if(itemsToCount[currentItem] && allItems.indexOf(currentItem) > -1) {
           finalItems[currentItem] = 0;
        }
    }
    
    for(var j = 0; j < allItems.length ; j++) {
        let currentItem = allItems[j];
        if(currentItem in finalItems) {
           finalItems[currentItem] += 1;
        }
    }
    return finalItems;
}

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

