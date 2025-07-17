/* My algorithm:
1. Create a function expression named reverseString that accepts `string` as parameter
2. Create a variable named splitString that splits the `string` into an array
3. Create an empty array reversedString where length is equal to splitString
4. Create a for loop:
  - initial value is splitString length minus 1
  - conditional check if i <= 0
  - decrement step value
5. Push current item to reversedString array
5. Return the joined reversedString
*/

const reverseString = function(string) {
  const splitString = string.split("");
  let reversedString = [];

  for (let i = splitString.length - 1; i >= 0; i--) {
    reversedString.push(splitString[i]);
  }

  return reversedString.join("");
};

// I forgot .reverse() function exists (－‸ლ)

// Do not edit below this line
module.exports = reverseString;
