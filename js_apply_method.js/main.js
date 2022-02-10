// Method Reuse
// The apply() method is similar to the call() method (previous chapter).
// the difference is just that it accepts array of arguements unlike call



// ------------------------------------------------------------------------
// The apply() Method with Arguments
const person = {
    full_name : function (fn , ln ){
        this.fn = fn;
        this.ln = ln;
    }
};

const person1 = {
    fn : "person1",
    ln : "person1 cast",
};

const person2 = {
    fn : "person2",
    ln : "person2 cast",
};

person.full_name.apply(person1 , ["fn1", "ln1"]);
person.full_name.call(person2 , "fn2", "ln2");
console.log(person1.fn + " : " + person1.ln);
console.log(person2.fn + " : " + person2.ln);

// ---------------------------------------------------------------------




// --------------------------------------------------------------------
// apply method without arguements
const person = {
    fullName: function (){
        console.log( this.fName + " " +this.lName);
    }
}
const person1 = {
    fName: "firstName",
    lName : "lastName"
}

person.fullName.apply(person1);
// ------------------------------------------------------------------------------------



// ----------------------------------------------------------
// Math.max.apply(null, [1,2,3]); // Will also return 3
Math.max.apply(null, [1,2,3]); // Will also return 3
// ----------------------------------------------------------


// ----------------------------------------------------------
// Understanding "Math.max.apply(null, [1,2,3])" this format for apply "
const person = {
    fName: "default_fName",
    lName: "default_lName", 
    fullName: function (a){
        console.log( this.fName + " " +this.lName);
    }
}
const person1 = {
    fName: "firstName",
    lName : "lastName"
}
person.fullName.apply(null, ["a"]); // undefined undefined
person.fullName.apply(null); // undefined undefined

// but it runs fine for Math.max function
let max = Math.max.apply(null , [2,7,5,4]);
comsole.log (max);
/**
 * So you can pass null as 1st arg in apply method. If this keyword is not used inside the function that will run fine , otherwise you may feel some other behaviour.
 */
 const null_in_apply = {
    f1 : function (){
        console.log( this);
    }
}
null_in_apply.f1.apply(null);
// this will refer to global above


