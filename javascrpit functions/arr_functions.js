// ARROW FUNCTIONS
const f_normal =  function f_normal (a, b){
    return a*b;
}
const f_arrow = (a,b) => a*b;
console.log(f_arrow(6,7));

// arrow function with multiple statement
const f_arrow_multiple_stmt = (a,b) =>{ 
    a=a**2;
    b=b**2;
    return a*b;
};
console.log(f_arrow_multiple_stmt(2,3));

// arrow function with single statement
const f_arrow_single_stmt = (a,b) => console.log(a*b);
// console.log(f_arrow_single_stmt(6,7)); // print undefined
f_arrow_single_stmt(6,7);