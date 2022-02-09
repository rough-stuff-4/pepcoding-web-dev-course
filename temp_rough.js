const person = {
    fn : "",
    ln : "",
    full_name : function (message){
        console.log(message + " " +this.fn + " " + this.ln);
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

person.full_name.call(person1 , "hi");
person.full_name.call(person2 , "hello");