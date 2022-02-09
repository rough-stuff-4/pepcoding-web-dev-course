function f_constructor(fn, ln){
    this.fn = fn;
    this.ln = ln;
}
let myObj = new f_constructor("bhagwati" , "prasad");
console.log(myObj.fn ," , " , myObj.ln);


