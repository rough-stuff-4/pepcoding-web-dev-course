// COUNT  NO OF DIGITS IN A NUMBER
function solve(n){
    let count = 0;
    while((Math.abs(n)) >=1 ){
        n=n/10;
        count++;
    }
    return count;
}
let ans = solve(-1.11);
console.log(ans);
