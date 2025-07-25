const add = function(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
};

const subtract = function(...numbers) {
  return numbers.reduce((diff, number) => diff - number);
};

const sum = function([...numbers]) {
  return numbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function([...numbers]) {
  return numbers.reduce((prod, number) => prod * number);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  let factorial = 1;

  for (let i = number; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
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
