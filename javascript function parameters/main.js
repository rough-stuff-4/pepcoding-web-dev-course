// parameters = formal variable in definition of the function
// arguements = real values passed in the function


// -------------------------------------------------------
// Parameter Rules
// JavaScript function definitions do not specify data types for parameters.

// JavaScript functions do not perform type checking on the passed arguments.

// JavaScript functions do not check the number of arguments received.
// -------------------------------------------------------------


// DEFAULT PARAMETERS
function old_default_parameter (x,y){
    if(y == undefined){
        y =3;
    }
    console.log(y);
}
function new_default_parameter (x,y=3){
    console.log(y);
}
old_default_parameter();
new_default_parameter(5);


// ---------------------------------------------------------------------
// ARGUEMENT OBJECT
// arguement object is a property of the function object
// this example finds out maximum elements among all arguement passed
function arg_obj_of_func(){
    let max = -Infinity , sum = 0;

    for(let i=0;i  < arguments.length; i++){
        if(arguments[i] > max) max =  arguments[i];
        sum+=arguments[i];
    }
    console.log("max = " , max , " , ", "sum = " , sum  );
}
arg_obj_of_func(1,2,3,4,6 , 1);
// -----------------------------------------------------------------------

/** If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object. 

 * Arguments are Passed by Value
The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.

Objects are Passed by Reference
In JavaScript, object references are values.

Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.

Changes to object properties are visible (reflected) outside the function.
 * 
*/
