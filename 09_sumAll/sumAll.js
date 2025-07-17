/* My algorithm:
1. Create a function expression that accepts parameters `start` and `end`
2. Create a for loop where the iterator `i` is equal to `start` and the 
    condition checks if `i` is less than or equal to `end`, increment step value.
3. Create a variable sum, initialize to 0.
4. For every loop, an addition assignment to `sum` is performed where `sum` is 
    equal to `sum` plus `i`
5. If the `start` is greater than `end`, the condition checks if `i` is greater
    than or equal to `end`, decrement the step value.
5. Return the total `sum`
*/

const sumAll = function(start, end) {
  let sum = 0;

  if (start > end) {
    for (let i = start; i >= end; i--) {
      sum += i;
    }
  } else {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
