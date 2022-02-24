// A good problem to create counter increaser 

// Q1: make a function to increase counter variable without exposing counter variable
let increase = (function counter(){
    let counter = 0;
    return function (){counter++; return counter;}
})()
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

// !!! A CLOSURE IS A FUNCTION HAVING ACCESS TO THE PARENT SCOPE, EVEN AFTER THE PARENT FUNCTION HAS CLOSED.

