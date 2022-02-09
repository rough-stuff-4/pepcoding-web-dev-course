// Following 3 types of function definitions
// 1: function declarations 
// 2: function expression
// 3: function constructor


function f_dec(){
    console.log("function declaration");
}

const f_exp = function (){
    console.log("function expression");
}

const f_constructor = new Function ("console.log('function constructor');");
// const f_constructor = new Function("return 5 * 4");

f_dec();
f_exp();
f_constructor();



// SELF INVOKING FUNCTION
(function f_self_invk(){
    console.log("Im slef-invoking function");
})();

// ANONYMOUS SELF INVOKING FUNCTION
(function (){
    console.log("Im ANONYMOUS slef-invoking function");
})();