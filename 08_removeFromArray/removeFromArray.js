/*
1. Create a function expression that accepts parameter `array` and `exclude`
2. Return the array using .filter() method that filter out the items of the
    array that are NOT included in the `exclusion` array.
*/
const removeFromArray = function(array, ...excludes) {
  return array.filter((item) => !excludes.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
