const findTheOldest = function(people) {
  people.forEach(person => {
    if ('yearOfDeath' in person) {
      person.age = person.yearOfDeath - person.yearOfBirth;
    } else {
      person.age = (new Date().getFullYear()) - person.yearOfBirth;
    }
  });

  const oldestPerson = people.reduce((oldest, person) => {
    return person.age > oldest.age ? person : oldest
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
