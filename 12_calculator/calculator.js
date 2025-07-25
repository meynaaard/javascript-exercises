const add = function(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
};

const subtract = function(...numbers) {
  return numbers.reduce((diff, number) => diff - number);
};

const sum = function([...numbers]) {
  return numbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
