const palindromes = function (string) {
  string = [...string].filter(char => /[^\W_]/ // pattern for non-letter char
                      .test(char))             // filtered out if true/match
                      .join("")                // join back as string
                      .toLowerCase();          // convert to lowercase

  const reversedString = string.split("") // split as an array of char
                               .reverse() // reverse array
                               .join(""); // join back as string

  return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
