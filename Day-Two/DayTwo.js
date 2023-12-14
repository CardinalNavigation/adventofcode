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
const readline = require("readline");

const readInterface = readline.createInterface({
  input: fs.createReadStream("Day-Two/DayTwo.txt"),
  // output: process.stdout,
  // console: false,
});

//Opening and Empty Array
let lines = [];

//readInterface.on Listens for the readInterface function to begin (".on")
//then takes each individual line and pushes that line to the empty array
readInterface.on("line", function (line) {
  lines.push(line);
  gameArraySort(lines);
});

//Now what?.. I want to sort each index item in a way that will be helpful.
// * Determine which games would have been possible if the bag had
// * been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes.
// * What is the sum of the IDs of those games?
function gameArraySort(gameArray) {
  //Lets try to get one "color" our first.
  for (let i = 0; i < gameArray.length; i++) {
    console.log("Game ", i, " is: ", gameArray[i]);
  }
  // console.log(gameArray[1]);
}
