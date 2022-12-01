// A.    Q + A
// How do we assign a value to a variable ?
//     with the let variable = value
// How do we change the value of a variable ?
//     with variable = value or variable += value
// How do we assign an existing variable to a new variable ?
//     with let new variable = old variable 
// Remind me, what are declare, assign, and define ?
//     Declare = to define something like a variable or parameter
//     Assign = to declare a valie belngs to a variable 
//     Define = Give meaning
// What is pseudocoding and why should you do it ?
//     Pseudocoding is coding in simple terms. We use it to break down logic
//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//90%

//B. Strings
//For all other questions that involve writing code, you can solve them via the following instructions.

//Create a variable called firstVariable
//Assign it the value of the string "Hello World"

let firstVariable = "Hello World"

//Change the value of this variable to some number

firstVariable = 34

//Store the value of firstVariablein a new variable called secondVariable

let secondVariable = firstVariable

//Change the value of secondVariableto any string.

secondVariable = "I love Mondays"

//What is the value of firstVariable ?
    
    console.log(firstVariable) //======> 34
    
//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

const myName = () => {
    let yourname = "Jazmine"
    console.log(`Hello, my name is ${yourname}`)
}

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Kevin' ==='Kevin');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  //console.log(false __ false __ false __ false __ false __ true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a && b && c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a*a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');
  
//D. The farm
//Declare a variable animal. Set it to be either "cow" or something else
//Write code that will print out "mooooo" if the it is equal to cow
//Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
//Commit

const farm = () => {
    let animal = "frog";
animal === "cow" ? console.log("Mooooo") : console.log("Hey! You're not a cow.")

}

farm()

//E. Driver's Ed
//Make a variable that holds a person's age; be semantic
//Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

const driver = () => {
    let age = 34
    age >= 16 ? console.log("Here are the keys") : console.log("Sorry, you're too young.")

}

driver()

//II. Loops
////A. The basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i < 11; i++){
    console.log(i)
}

//Write a loop that will print out all the numbers from 10 up to and including 400

for (let i = 10; i < 401; i++){
    console.log(i)
}

//Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i = 12; i < 4001; i++){
    i%3===0 ? console.log(i) : undefined
}