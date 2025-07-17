const repeatString = function(string, num) {
  let repeatedString = "";
  
  for (let i = 1; i <= num; i++) {
    repeatedString += string;
    // OR
    // repeatedString = repeatedString.concat(string);
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
