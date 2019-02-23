function groupAdultsByAgeRange (people) {
  const result = { }
  
  // only run the transformation if length of the array is not zero.
  // sadly I didnt get this part to work properly
  if (people.length !== 0) {

const adults18 = people
.filter(people => people.age > 18 && people.age <= 20 && people.length !== 0);
const adults20 = people
.filter(people => people.age > 20 && people.age <= 30 && people.length !==  0);
const adults30 = people
.filter(people => people.age > 30 && people.age <= 40 && people.length !== 0);
const adults40 = people
.filter(people => people.age > 40 && people.age <= 50 && people.length !== 0);
const adults50 = people
.filter(people => people.age > 50 && people.length !==  0);
  

  // pushing the adult classes into a result with the corresponding text.
  // I wanted to push the data of the adultgroups + text to the result, not sure how.
  // Tried a lot of things.

}
  return result
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange

