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

//D. Savings account

//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.

let bankAccount = ()=>{
    let array = []
    for(let i= 1; i<11; i++){
    array.push(i)
    }
    let sum = array.reduce((a, b) => a + b, 0);
console.log(sum)
}
bankAccount()

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.


let bankAccount2 = ()=>{
    let array = []
    for(let i= 1; i<101; i++){
    array.push(i)
    }
    let sum = array.reduce((a, b) => a + b, 0)*2;
console.log(sum)
}
bankAccount2()



//A. Talk about it:
//What are the things in an array called ?
    //an element
//Do Arrays guarantee those things will be in order?
    //yes
//What real-life thing could you model with an array?
// a file cabinet

//B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes

    let quote = "Hello WOrld"
let array = ["its raining cats and dogs", "the sky is falling", "moma said knock you out", quote]

//C.Accessing elements
 
   //Given the following array
    //How do you access the 1st element in the array?

 const randomThings = [1, 10, "Hello", true]
 console.log(randomThings[0])
 
 //Change the value of "Hello"to "World"

 randomThings[2]= "World"
 //Check the value of the array to make sure it updated the array.How ? Why, yes!

console.log(randomThings);


// D. Change values
// Given the following array
// What would you write to access the 3rd element of the array?

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

console.log(ourClass[2])
//Change the value of "Github" to "Octocat"
//Add a new element, "Cloud City" to the array


ourClass[4] = "Octocat"
ourClass.push("Cloud City")
console.log(ourClass)

//E. Mix It Up
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

//Given the following array:

const myArray = [5, 10, 500, 20]

//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

myArray.push("Aegon","Vegan")

//Remove the 5from the beginning of the array.

myArray.shift()

//Add the string "Bob Marley"to the beginning of the array.

myArray.unshift("Bob Marley")

//Remove the string of your choice from the end of the array.

myArray.pop()
//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

myArray.reverse()

console.log(myArray)


//F. Biggie Smalls
//Create a variable that contains an integer.

let numbers =[-1,2,4,5,6]

//Write an if ... elsestatement that:

//console.log()s "little number" if the number is entered is less than 100
//console.log()s big numberif the number is greater than or equal to 100.

const bigorlittle = num => {
    num< 100 ? console.log("little number") : console.log("big number")
}

bigorlittle(100)

//G. Monkey in the Middle
//Write an if ... else if ... elsestatement:

const littleOrBig = num => {
    if (num< 5) {
        console.log("little number")
    } else if (num > 10) {
        console.log("big number")
    } else {
        console.log("monkey")
    }
}

littleOrBig(4)

//console.log()little numberif the number entered is less than 5.
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey".


const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence
console.log("Kristyn is rocking that " + kristynsCloset[2])
//in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(5,0,"raybans")


// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

kristynsCloset[6] = "stained hat"

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

console.log(thomsCloset[0][0])
1

// In the same way, access one item from Thom's pants array.

console.log(thomsCloset[1][0])

// Access one item from Thom's accessories array.

console.log(thomsCloset[2][1])
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(`Thomas is wearing ${thomsCloset[0][0]} and ${thomsCloset[1][0]} and ${thomsCloset[2][1]}`)


// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas"

console.log(thomsCloset)
//Print Greeting

const greet = name => {
    console.log(`Good Day ${name}`)
}

greet("Chase")

// Print Cool

const printCool = name => { 
    console.log(`${name} is cool`)

}

printCool('James')

//C. calculateCube
//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

const cubed = num => {
    console.log(Math.pow(num,3))
}

cubed(3)

//D. isVowel
//Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

const isVowel = str => {
    let results = /[aeiou]/gi.test(str)
    return results
}

console.log(isVowel("y"))

//E. getTwoLengths
//Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const twoLengths = (a, b) => {
    let results = []
    let str1 = a.split("")
    let str2 = b.split("")

    results.push(str1.length, str2.length)



    console.log(results)
}

twoLengths("happy", "birthday")

//F. getMultipleLengths
//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = arr => {
    let results = []
    arr.forEach(word => results.push(word.length))
    return results
}

console.log(getMultipleLengths(["happy","birthday", "little","man"]))


//G. maxOfThree
//Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

const maxOfThree = arr => {
    return Math.max(...arr)
}

console.log(maxOfThree([1, 22, 34, 55, 66, 3]))

//H. printLongestWord
//Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = arr => {
    arr.sort(function(a, b) { return b.length - a.length; });
  return arr[0];
}

console.log(printLongestWord(["Happy","birthday", "Avery", "and","Greyson","Best Wishes"]))

//======> Objects Start here 

//A. Make a user object
//Create an object called user.
//Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {
    name: "James",
    email: undefined,
    age: 23,
    purchased: [],

    
}


//B. Update the user
//Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.

user.email="fakeemail@gmail.com"

//Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.age += 1

//Adding keys and values
//You have decided to add your user's location to the data that you want to collect.
//Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user.location = "Detroit, Michigan"

//D. Shopaholic!
//Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

user.purchased.push("carbohydrates")

//Our user has purchased an item! They have purchased some "peace of mind".Using.push(), add the string "peace of mind" to the purchasedarray.

user.purchased.push("peace of mind","Merino jodhpurs" )

//Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
//Console.log just the "Merino jodhpurs" from the purchasedarray.

console.log("Merino jodhpurs")

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "Brighton, Michigan",
    purchased:[],
}

console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
console.log(user.friend.age)
user.friend.purchased.push("The One Ring", "A latte")
console.log(user.friend.purchased)
console.log(user.friend.purchased[1])

//F. Loops
//Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.

const userPurchased = () => {
    for (let i = 0; i < user.purchased.length; i++) {
        console.log(user.purchased[i])
    }
}

userPurchased()
//Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

const friendPurchased = () => {
    for (let i = 0; i < user.friend.purchased.length; i++) {
        console.log(user.friend.purchased[i])
    }
}

friendPurchased()

//G. Functions can operate on objects
//Write a single function updateUserthat takes no parameters. When the function is run, it should:
//it should increment the user's age by 1
//ake the user's name uppercase
//The function does not need a returnstatement, it will merely modify the user object.

const updateUser = () => {
    user.name= user.name.toUpperCase()
    user.age += 1;
}
//updateUser()
console.log(user)

//Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

const updateUser2 = (obj) => {
    obj.name = obj.name.toUpperCase();
    user.age += 1;
}
updateUser2(user)
console.log(user)