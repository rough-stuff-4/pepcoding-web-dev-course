/**
 * `Q1.  Print Fizz Buzz.
Description: Write a program that prints the numbers from
 1 to 20 and for multiples of 
'3' print "Fizz"  
'5' print "Buzz"
'3' and '5' both print "FizzBuzz"
else number itself
 */

const ps = require("prompt-sync");

function solve(number) {
  if ((number % 5 == 0) & (number % 3 == 0)) console.log("FizzBuzz");
  else if (number % 5 == 0) console.log("Buzz");
  else if (number % 3 == 0) console.log("Fizz");
}

const prompt = ps();
let number = prompt("Enter the Number : ");
solve(number);
