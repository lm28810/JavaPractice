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

//Get even
//Print out the numbers that are within the range of 1 - 100
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"


for (let i = 0; i < 101; i++){
    i%2 === 0 ? console.log(i +" "+ "is even") : console.log(i)
}

//HighFIVe Problem

for (let i = 1; i < 1001; i++){
    if (i % 3 === 0 && i % 5 === 0) { 
        console.log(`${i} is a highbread`)
    }else if (i % 5 === 0) {
        console.log(`I found a ${i}, HiFive`)
    } else if (i % 3 === 0) {
        console.log(`I found a ${i}, but three is a crowd`)
    }
}

D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.


//A. Talk about it:
//What are the things in an array called ?
    //an element
//Do Arrays guarantee those things will be in order?
    //yes
//What real-life thing could you model with an array?
// a file cabinet

//B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes

    let quotes = ''
    ["its raining cats and dogs", "the sky is falling", "moma said knock you out", quotes]

    C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]

How do you access the 1st element in the array?
Change the value of "Hello"to "World"
Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
