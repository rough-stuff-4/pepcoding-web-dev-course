
// this will refer to global

// In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.
// "use strict";
const null_in_apply = {
    f1 : function (){
        console.log( this);
    }
}
let x = 8;
null_in_apply.f1.apply(x);
// 3 cases :
    // 1: if null => in strict mode null, in unstrict mode  global object
    // 2: if not null , then the corresponding wrapper object or object.