const fibonacci = function(position) {
  // I have not managed to solve this exercise myself :(
  // Special thanks to Dave Gray for providing an example of both
  // iterative and recursive fibonacci sequence

  position = parseInt(position);

  if (position < 0) return "OOPS";

  // Iterative approach:
  /* if (position <= 1) return position;
  const sequence = [0, 1];
  for (let i = 2; i <= position; i++) {
    const [nextToLast, last] = sequence.slice(-2);
    sequence.push(nextToLast + last);
  }
  return sequence[position]; */

  // Recursive approach:
  if (position < 2) return position;
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// Do not edit below this line
module.exports = fibonacci;
