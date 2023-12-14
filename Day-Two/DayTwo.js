/**
 * Determine which games would have been possible if the bag had
 * been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. 
 * What is the sum of the IDs of those games?
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
Game 1, 3 and 5 would have been possible. 
 */

const fs = require("fs");

try {
  const data = fs.readFileSync("Day-Two/DayTwo.txt", "utf8");
  // console.log(data);
  getItIntoAnArray(data);
} catch (err) {
  console.error(err);
}

// This funciton is going to take in the text input.
// We want to convert the text input into something which is easy to go over with a function, like an array.
// This could be a nested array, that might be the best option.
function getItIntoAnArray(data) {
  // console.log("Data is In The Function", data);
  // Lets Start with the highest level first, which is reading each line individually, and tossing into an array.
  let highestLevelArray = [];
  highestLevelArray.push(data);
  console.log(highestLevelArray);
  highestLevelArray.map(indexSort);
}

//Right now I just have a one index array with a LOT of text.
//We want to sort that text into seperate indexes.
//I am attemping a .map() which transforms the array into
//a new array.
function indexSort(item) {
  // let bagsArray = [];
  // bagsArray.push(item);
  // console.log("This is the Bags Array", bagsArray);
}
