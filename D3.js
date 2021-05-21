// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of another 'isMale' variable
*/
let isMale = true;
let person = isMale ? "male" : "female";
console.log(person);

/*
 2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.
*/

let number1 = 3;
let number2 = 1;
let sum = number1 + number2;
let subtraction1 = number1 - number2;
let subtraction2 = number2 - number1;

let checkNumberEight = (number1 === 8) || (number2 === 8) || (sum === 8) || (subtraction1 === 8) || (subtraction2 === 8);
console.log(checkNumberEight);

/*
  3. Create a variable which concatenates two strings.
*/

let weather = "Hello, " + "it is a beautiful sunny day!";
console.log(weather);

/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
*/

let a = -5;
let b = -5;
let c = 100;

/*
let a = -1;
let b = 31;
let c = 100;
*/

/*
let a = 0;
let b = 5;
let c = 90;
*/

if (a <= b && b <= c) {
    console.log(a, b, c);
} else if (a <= c && c <= b) {
    console.log(a, c, b);
} else if (b <= a && a <= c) {
    console.log(b, a, c);
} else if (b <= c && c <= a) {
    console.log(b, c, a);
} else if (c <= a && a <= b) {
    console.log(c, a, b);
} else if (c <= b && b <= a) {
    console.log(c, b, a);
}

/*
 5. Write code to find the average of two given integers.
*/

let x = -30;
let y = 100;

let average = (x + y) / 2;
console.log(average);

/* 
  6. Find the longest of two given strings
*/

let askForMoney = "Hey man, look, I need some money."
let refuseToGiveMoney = "Go to a bank!"

if (askForMoney.length > refuseToGiveMoney.length) {
    console.log("askForMoney is the longest string: " + askForMoney.length + " characters." );
} else {
    console.log("refuseToGiveMoney is the longest string: " + refuseToGiveMoney.length + " characters." );
}

/*
 7. Write code to check whether a value is an integer or not.
*/

let pickleRick = "I'm pickle Rick!!"

if (Number.isInteger(pickleRick)) {
    console.log("I'm an integer!");
} else {
    console.log("I'm not an integer!");
}

/*
 8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
*/

let theNumber = 54581;
let thirtyPercentOfTheNumber = 0.3 * theNumber;
console.log("30% of 54584 is: " + thirtyPercentOfTheNumber); 

/*
 9. Write code to check if a given number is even or odd.
*/

if (theNumber % 2 === 0) {
    console.log(theNumber + " is an even number.")
} else {
    console.log(theNumber + " is an odd number.");
}