// Section I: Variables and Data Types

// A.) Variables
//  Declare a new constant variable called myName and assign it your name?
// Declare a variable called favoriteLanguage and assign it the value of Python?
// Declare a new variable called newFavoriteLanguage and assign it JavaScript;
// Assign the value of newFavoriteLanguage to favoriteLanguage referencing each other.
//  Finally log or print a message using a Literal String, make use of the variables myName and favoriteLanguage.

const myName = "Neith";
let favoriteLanguage = "Python";
let newFavoriteLanguage = "JavaScript";
 favoriteLanguage = newFavoriteLanguage;
 console.log(`Wassap, its ${myName} and  my new favorite lanuage is ${favoriteLanguage}`);

//B.) strings
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable? Log it!
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. ex: Hello, my name is Jean Valjean

let firstVariable;

firstVariable = "Hello World";
firstVariable = 3;
secondVariable = firstVariable;
secondVariable = "Goodbye World"

console.log(firstVariable) // the value is 3

let yourName = "Neith";

console.log(`Hello, my name is ${yourName}`);

// C.) Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false && false)
console.log(e == 'Kevin');
// console.log(a __ b ___ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a && a || d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

// D.) THe Farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow." Commit

let animal = "cow";
if (animal === "cow") {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.");
}

// E.) Drivers ED
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age = 15;

if (age >= 16){
    console.log(`Here are the keys!`);
}
else{
    console.log(`Sorry you're too young.`);

}
    






// ==============Section II: Loops================

// write loop that will print out the numbers 0 to 10 

for (let i = 0; i <= 10; i++)  //basically saying starting from 0 incirment i by 1 until it = 10{
    {
        console.log(i);
    }

//