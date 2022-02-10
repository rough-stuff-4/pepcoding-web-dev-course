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
person.full_name.apply(person2 , ["fn2", "ln2"]);
console.log(person1.fn + " : " + person1.ln);
console.log(person2.fn + " : " + person2.ln);

// ---------------------------------------------------------------------
