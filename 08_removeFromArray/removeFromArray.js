/*
1. Create a function expression that accepts parameter `array` and `exclude`
2. Use .filter() method to filter out the array items that are not equal to the
    `exclude` parameter

*/

const removeFromArray = function(array, exclude) {
  return array.filter((item) => item !== exclude);
};

// Do not edit below this line
module.exports = removeFromArray;
