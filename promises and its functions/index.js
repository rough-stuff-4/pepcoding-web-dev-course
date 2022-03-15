// PROMISE.ALL() FUNCTION = (if all resolved only then an array of all returned promises otherwise first error)

// let p1 = new Promise (function (resolve , reject) {
//     resolve('Promise 1 is resolved');
// } )

// let p2 = new Promise (function (resolve , reject) {
//     resolve('Promise 2 is resolved');
//     // reject('Promise 2 is rejected');

// } )

// let p3 = new Promise (function (resolve , reject) {
//     // resolve('Promise 3 is resolved');
//     reject('Promise 3 is rejected');
// } )


// let promiseAll = Promise.all([p1,p2, p3])
// // console.log(promiseAll)
// promiseAll.then((PromiseArr) => {
//     console.log(PromiseArr);
// }).catch((err)=>{
//     console.log(err)
// });
// -----------------------------------------------------



// -----------------------------------------------------
// Promise.race() method  = (return first settled promise)

// let p1 = new Promise (function (resolve , reject) {
//     // resolve('Promise 1 is resolved');
//     reject('Promise 1 is rejected');
// } )

// let p2 = new Promise (function (resolve , reject) {
//     resolve('Promise 2 is resolved');
//     // reject('Promise 2 is rejected');
// } )

// let p3 = new Promise (function (resolve , reject) {
//     resolve('Promise 3 is resolved');
// } )

// Promise.race([p1,p2,p3]).then((val)=> {
//     console.log(val);
// }).catch((err)=> {
//     console.log(err)
// })

// -----------------------------------------------------
// promise.allSettled() method = (return all settled promises )
// like below : 
//   [
//     { status: 'rejected', reason: 'Promise 1 is rejected' },
//     { status: 'fulfilled', value: 'Promise 2 is resolved' },
//     { status: 'fulfilled', value: 'Promise 3 is resolved' }
//   ]

// let p1 = new Promise (function (resolve , reject) {
//     // resolve('Promise 1 is resolved');
//     reject('Promise 1 is rejected');
// } )

// let p2 = new Promise (function (resolve , reject) {
//     resolve('Promise 2 is resolved');
//     // reject('Promise 2 is rejected');
// } )

// let p3 = new Promise (function (resolve , reject) {
//     resolve('Promise 3 is resolved');
// } )
// Promise.allSettled([p1, p2 , p3]).then((arr) => {
//     console.log(arr);
// })


// ----------------------------------------------------
function test(){
    var a = 1+ 1;
    // suppose here is your loader
    return new Promise(function (resolve , reject){
        if(a == 2){
            resolve("Promise Resolved");
        } else {
            reject ("Promise Rejected");
        }
    })
}  

test().then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
}).finally(()=>{
    // here you can stop your loader aka clean up functionality
    console.log("Experiment Complete")
})