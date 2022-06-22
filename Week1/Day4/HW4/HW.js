// Question 1:
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});
 console.log(" \n----------")

// Question 2:
const numbers = [1, 5, 8]
// sqr by map function
const numbersSquared = numbers.map(function(num) {
    return num ** 2;
  });
console.log(`number squared of [${numbers}]is : [${numbersSquared}]`) 
  /*--- using an arrow function for the callback ---*/
const numbersSquaredArrow = numbers.map(num => num ** 2);
console.log(`[${numbersSquaredArrow} ] \n----------`)


// Question 3:
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const instructorsAdd=instructors.map(name => name+" is awesome")
console.log(`adding is awesome for each element : [ ${instructorsAdd} ]\n----------`)


// Question 4:
const nums = [25, 6, 8, 3];
count=0
const evenNumbers=nums.reduce(function(acc, num) {
  return acc%2==0, count++;
});
console.log(`count the number of even numbers in  [${nums}] is: [${evenNumbers}] \n----------`)


// Question 4:
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks=people.filter(item => item.includes('jerks'))
console.log(`out all "jerks" from [${people}] : [${jerks}]\n----------`)


//Question 5.1:
const number=[8, 2, 2, 4]
len=number.length
const avg=number.reduce((acc,num) => (acc+num))/number.length
console.log(`the avrage number of [${number}] is : [${avg}]\n----------`)


// Question 5.2:
str =["caterpillar",]
const reverse = str.map(word => word.split("").reverse().join(""));
console.log(`reverse the ${str} is : ${reverse} \n----------`)


//Objects Exercise
let Movie = { 
  title: "Harry Potter", 
  duration: 161, 
  stars: ["Daniel Radcliffe", "Rupert Grint ", "Richard Harris"],
  introduce : function(){
      console.log(`\n${this.title} lasted for ${this.duration} minutes. \nStars: ${this.stars}`)
  }
};
Movie.introduce()

