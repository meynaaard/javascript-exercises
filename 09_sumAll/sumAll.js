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

  if (isNonNegative(start, end) 
    && isInteger(start, end) 
    && isNumber(start, end)) {
    if (start > end) {
      for (let i = start; i >= end; i--) {
        sum += i;
      }
    } else {
      for (let i = start; i <= end; i++) {
        sum += i;
      }
    }
  } else {
    return "ERROR";
  }

  return sum;
};

function isNonNegative(start, end) {
  return start > 0 && end > 0;
}

function isInteger(start, end) {
  return Number.isInteger(start) && Number.isInteger(end);
}

function isNumber(start, end) {
  return Number.isFinite(start) && Number.isFinite(end);
}

// Do not edit below this line
module.exports = sumAll;
