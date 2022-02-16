/**
 * time complexity = O( |h-l| * sqrt(n) ) == O(n^1.5)
 */
const ps = require("prompt-sync");
const prompt = ps();

function solve1(l,h){
    for(let i = l  ;i<=h ; i++  ){
        if(i == 0 || i==1) continue;

        if(i==2 || i==3) {
            console.log(i);
            continue;
        } 
        
        let skip = false;
        for(j=2; j*j<=i ; j++){
            if(i%j == 0) {
                skip = true;
                break;
            }
        }
        if(skip == false) console.log(i);
    }
}

let low = prompt();
let high = prompt();
solve1(+low,+high);