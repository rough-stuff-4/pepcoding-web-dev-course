ion f_dec(){
    console.log("function declaration");
}

const f_exp = function (){
    console.log("function expression");
}

const f_constructor = new Function ("","console.log('function constructor');");
const f_constructor = new Function("return 5 * 4");

f_dec();
f_exp();
f_constructor();