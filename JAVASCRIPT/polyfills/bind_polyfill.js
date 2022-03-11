let name =  {
    fn : "Akshay",
    ln : "Saini"
}
let printName = function (hometown , state , country){
     console.log(this.fn + "  " + this.ln + " " + hometown + " " + state + " " + country) ;
}

let printMyName = printName.bind ( name , "Dehradun" , "Uttarakhand");

printMyName( "India" );

Function.prototype.mybind =  function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...args2){
        // console.log(obj);
        obj.call(args[0] , ...params , ...args2);
    }
}

let printMyName_bound = printName.mybind ( name , "Dehradun" );
printMyName_bound("Uttarakhand" , "India");