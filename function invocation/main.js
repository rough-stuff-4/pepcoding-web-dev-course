// It is common to use the term "call a function" instead of "invoke a function".
// It is also common to say "call upon a function", "start a function", or "execute a function".

// myFunction() and window.myFunction() is the same function:


// ---------------------------------------------------------------
// What is this?
// In JavaScript, the this keyword refers to an object.
/*
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/


/**
 * Note :
this is not a variable. It is a keyword. You cannot change the value of this.
 */

// ---------------------------------------------------------------------
/**
 * The Global Object
When a function is called without an owner object, the value of this becomes the global object.

In a web browser the global object is the browser window.

 */
const f1 =  function(){
      return this;
}
let x = f1();
console.log(x);
// in console it will print object with definition
// while in document.write it  will print [object Window] = window.toString();
// --------------------------------------------------------------------------


// ---------------------------------------------------------------------
// iNVOKING A FUNCTION AS A METHOD
const person = {
    fname : "Bhagwati",
    lname : "Prasad",
    full_name : function(){
        return this.fname + this.lname;
    },
    return_this : function (){
        return this;
    }

}

let full_name = person.full_name();
let this_value = person.return_this();
console.log(  " " + full_name + ", " + this_value );
console.log(  full_name ," , " ,  this_value );
// ---------------------------------------------------------------------------------


// ----------------------------------------------------------------------
// Invoking a Function with a Function Constructor
function f_constructor(fn, ln){
    this.fn = fn;
    this.ln = ln;
}

let myObj = new f_constructor("bhagwati" , "prasad");
console.log(myObj.fn ," , " , myobj.ln);
// -----------------------------------------------------------------------


/**
 * A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.

The this keyword in the constructor does not have a value.
The value of this will be the new object created when the function is invoked.
*/