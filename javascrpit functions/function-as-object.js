// ---------------------------------------------------
// FUNCTIONS ARE OBJECTS
/*
The typeof operator in JavaScript returns "function" for functions.

But, JavaScript functions can best be described as objects.

JavaScript functions have both properties and methods.

The arguments.length property returns the number of arguments received when the function was invoked:
 */
function f_r_objects(x,y,z){
    for(let i = 0 ; i < arguments.length ; i++){
        console.log(arguments[i]);
    }
}

f_r_objects(1,2,3);
// -------------------------------------------------------------