//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

function findWords(dogStr,dogName){
    let matched = false;

    for (const name of dogName) {
      if (dogStr.includes(name)) {
        console.log(`Matched ${name}`);
        matched = true;
      }
    }
  
    if (!matched) {
      console.log("No Matches");
    }
  }

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
findWords(dog_string,dog_names)

// //Call method here with parameters

// //============Exercise #2 ============//
// /*Write a function that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
    return arr;
}

const Arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
const NewArr = replaceEvens(Arr);

console.log(NewArr);
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Codewar Example #1:

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

number = 3

console.log(
    number % 2 === 0 ?
    'Even' :
    'Odd'
)

// Codewar Example #2:


// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"


age = 39

console.log(
    age < 14 ?
    'drink toddy' :
    age < 18 ?
    'drink coke' :
    age >= 18 && age <21 ?
    'drink beer' :
    'drink whisky'
)