/**
 * Example
Sample Input

6 
24

Sample Output
7
11
13
17
19
23
 */

function solve(low , high){
    let n = (low/6);
    for(let i=(n==0?++n:n) ; (6*i-1) <= high; i++){
        
        let flag = true , tempNum = i*6-1;
        for(let j=2; j*j<= tempNum; j++){
            if(tempNum%j==0 && tempNum >= low && tempNum <= high){
                flag= false;
                break;
            }
        }
        if(flag && tempNum >= low && tempNum <= high) console.log(tempNum);

        flag = true , tempNum = i*6+1;
        for(let j=2; j*j<= tempNum; j++){
            if(tempNum%j==0){
                flag= false;
                break;
            }
        }
        if(flag && tempNum >= low && tempNum <= high) console.log(tempNum);
    }
}

// solve(6,24);


function solve2(l, h){
    let il = l/6 , til = l/6;
    let ih = h/6 , tih = l/6;
    let rl = l%6 , rh = h%6;
    let flag2 = false;
    
    if(rl==1 || rl==0){ //so here 1st we check if (6*(il)+1) is a prime or not , than il++;
        if(isPrime(6*(il)+1)) console.log(6*(il)+1);
        il++;
    } 
    // else if(rl == 0){ //here we only need to check 6*il+1 , than  il++;
    //     if(isPrime(6*(il)+1)) console.log(6*(il)+1);
    //     il++;
    // }
    
    if(rh==5){ //so here 1st we check if (6*(ih+1)-1) is a prime or not , than ih--;
        ih--;
        flag2 = 1;
    } else if(rh == 0){  //here we only need to check 6*ih-1 , than decrease ih--;
        ih--;
        flag2 = 2;
    }
    
    for(let i=il; i<=ih; i=+6){
        if(isPrime((i*6)-1)) console.log((i*6)-1);
        if(isPrime((i*6)+1)) console.log((i*6)+1);
    }
    if(flag2 == 1) {
        if(isPrime(6*(tih+1)-1)) console.log(6*(tih+1)-1);
    }
    if(flag2 == 2) {
        if(isPrime(6*(tih)-1)) console.log(6*(tih+1)-1);
    }


}

function isPrime(num){
    if (num == 2 || num == 3) return true;
    else if ( num%2 == 0 || num%3 == 0) return false;
    for(let i=6; i*i<=num; i+=6){
        if(num%(i-1) == 0 ||  num%(i+1) == 0 ) return false;
    }
    return true
}

solve2(6,24);
