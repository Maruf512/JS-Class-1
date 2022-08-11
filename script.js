console.log("hello World");
console.log("Ajk amar mon vlo ase!");

// variables
// let name = "Assassins Creed";
let number = 512;
let temparature = 38;
let device = "Desktop";

console.log(temparature);

// variable naming convention (Camel case)
let herName = "Mikasa";
let myBikeBrand = "Tron Legend";
let firstName = "Erin";
let lastName = "Yager";
let ramFrequencyInTimeOverTorqueSpeed = 3200;

// Only For special case
let boy_captain = "Gol D. Roger";
let girl_captain = "Nami";
let YOUR_MONITOR_PRICE = 12000;
let $unknown_girl_name = "unknown";
let PI = 3.1416;

// Cant use this kinds of variable
// let 10mafia_name = "daku" cant use number in the begening of variable
// let bf&gf = "unknown"; cant use (&)
// let new-number = 100; cant use (-)

// cant use reserved keaywards for variable
// let new = 10;
// let true = 10;
// let false = 20;
// let function = 10;
// let let = 30;
// We shouldent use capital letter in the begening of variable (We will use this kind of name in JS class)
// let Person = "Choppar";
// We shouldent use a meaningful name
// let bike1 = "Dukate"
// let bike2 = "Kawasaki"

console.log(firstName);

/* 
Data types: object or primitive
primitive data types:
  1. number (integer, floating)
  2. string (anything inside of "")
  3. boolean (True or False)
  4. undefined
  5. null
  6. symbol
  7. bigint

  value has type, variable dont have data types
  */

let movieRating = 7.8;
let movieName = "inception";
let isRaining = false;
let isSheCure = true;
let isMarried = false;
let isJavaScriptFun;

console.log(typeof movieRating);
console.log(typeof movieName);
console.log(typeof isRaining);
console.log(typeof isSheCure);
console.log(typeof isMarried);

// re-assign value or mutate
isJavaScriptFun = true;
console.log(typeof isJavaScriptFun);

// this data type is a bug of JS
let carSpeed = null;
console.log(typeof carSpeed);

// null isn't an object. it's a bug

let age = 30; // declareing a variable using let keyward
age = 31; //re-assaign or mutate

// we cant re-assaign const value. and we haveto set a fixed value or it will count as error
const birthYear = 1970;
// birthYear = 2000; cant change a const value

// never use var it has alot of bugs
var planMasterName = "Mr.X";
planMasterName = "Mr.Y";

// never use without kyword
fatFriendName = "Janina";
console.log(fatFriendName);

const myLocation = "Dhaka";
const distance = 234;
console.log(myLocation, distance);
