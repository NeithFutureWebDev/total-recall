// Section I: Variables and Data Types

// A.) 
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


// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a __ b);
// console.log(c __ d);
// console.log('Name' __ 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true __ false);
// console.log(false __ false __ false __ false __ false __ true);
// console.log(false __ false)
// console.log(e ___ 'Kevin');
// console.log(a __ b ___ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 __ '48');



// ==============Section II: Loops================

// write loop that will print out the numbers 0 to 10 

for (let i = 0; i <= 10; i++)  //basically saying starting from 0 incirment i by 1 until it = 10{
    {
        console.log(i);
    }

//