//---------------------------------------------------------------
// Q1- find maximum arguement and return it.
function max(){
    let max = -Infinity;
    for(let i=0 ; i< arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

let max_res = max(1,3,-2,-5,-6, 4,34);
// console.log(max_res);
//---------------------------------------------------------------



//---------------------------------------------------------------
// Q2- find sum of all the arguements.
function sum(){
    let sum = 0;
    for(let i=0 ; i< arguments.length; i++){
        if(arguments[i] != NaN){
            sum += arguments[i];
        }
    }
    return sum;
}

let sum_res = sum(1,3,-2,-5,-6, 4,34);
// console.log(sum_res);
//---------------------------------------------------------------



//---------------------------------------------------------------
// Arguments are Passed by Value
// Objects are Passed by Reference
//---------------------------------------------------------------



// ---------------------------------------------------------------
// Methods like call(), apply(), and bind() can refer this to any object.
//---------------------------------------------------------------



//---------------------------------------------------------------
// The Global Object
// When a function is called without an owner object, the value of this becomes the global object.
var  a = "hi";
const obj = {
    a: "a of object",
    f1 : function f1 (){
        console.log(this.a);    
    }
}
let f = obj.f1;
// f(); // hi (in browser) | undefined (in node js)
// obj.f1(); // a of object
// console.log(this.a);  // hi (in browser) | undefined (in node js)
// In a web browser the global object is the browser window.
// This example returns the window object as the value of this:
//---------------------------------------------------------------



// THE THING CALLED THIS, IS THE OBJECT THAT "OWNS" THE JAVASCRIPT CODE. 



//---------------------------------------------------------------
// way to create objects in javascript

// 1: Object literals
var obj_rough = {};
obj_rough["property"] = "p1";
// console.log(obj_rough["property"]);
var obj_rough2 = {p2 : "p3"};
obj_rough2["property"] = "p2";
// console.log(obj_rough2["property"]);

// 2: Object constructor
var obj_rough = new Object();
obj_rough.a =  "a";
// console.log(obj_rough.a);

// 3: Factory Fnctions
function F4(){
    return {a : "a"};
}
var obj_rough = F4();
// console.log(obj_rough.a);


// 4: Constructor Function
// A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.
// The this keyword in the constructor does not have a value.
// The value of this will be the new object created when the function is invoked.
function Mobile(brand){
    this.brand = brand;
    this.getBrand = function (){
        console.log( this.brand);
    }
}
var obj_rough = new Mobile("apple");
console.log(obj_rough.brand);
obj_rough.getBrand();
var obj_rough = new Mobile("Banana");
console.log(obj_rough.brand);
//---------------------------------------------------------------


