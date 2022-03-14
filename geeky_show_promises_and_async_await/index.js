// HERE WE SHOWED THAT SETTIMEOUT FUNCTION HAS TRUST ISSUES
// --------------------------------------------------
// const myPromise = new Promise(function (myResolve, myReject) {
//     setTimeout(function () {
//       myResolve("I  !!");
//     }, 3);
//   });

//   myPromise.then((str)=> {
//       console.log(str);
//   });

//   for(let i =0 ; i < 1000; i++){
//       if(i%10000000 == 0){
//           console.log(i);
//       }
//   }
// --------------------------------------------------

// --------------------------------------------------
// NOW WE ARE DISCUSSING ABOUT CALLBACK CAN BE SYNCHROUNOUS, AND ASYNCHRONOUS AS WELL
// Synchronous callback

// console.log("Start");

// const roll = [1,2,3,4,5,6,7,8];
// // synchronous callback
// roll.forEach((r) => {
//     console.log(r);
// })

// // asynchronous callback
// setTimeout(() => {
//     console.log("I will run after 3 seconds");
// }, 3000);

// console.log("End");

// --------------------------------------------------

// --------------------------------------------------
// Problem with callback functions
// function getName(name){
//     setTimeout( () => {
//         console.log("In side SetTimeout");
//         return name;
//     } , 2000 ) ;
// }

// let name = getName("Sonam");

// console.log(name); // It will print undefined
// --------------------------------------------------

// ------------------------------------------ --------

// Solution of Problem with callback functions

// function getName(name , callback) {
//     setTimeout ( () => {
//         console.log("Inside  name SetTimeout");
//         callback(name);
//     } , 2000);
// }

// let name = getName("Sonam" , (name)=> {
//     console.log(name);
// });

// function getHobbies (name , callback) {
//     setTimeout ( () => {
//         console.log("Inside  Hobbies SetTimeout");
//         callback(['Cricket'  , 'Reading' , 'Dancing']);
//     } , 2000);
// }

// const nm = getName('Sonam' , (nm) => {
//      console.log(nm);
//      getHobbies(nm , (hobby)=> {console.log(hobby)});
//      console.log("End");
// });

// getHobbies(nm , (hobbies) => {

// });

// console.log(name); // It will print undefined

// ------------------------------------------------


// ------------------------------------------------
// My Example : Solution of Problem with callback functions
// Understand following behavior

// function async1(callback) {
//   let data1;
//   setTimeout(() => {
//     data1 = "data1";
//     console.log(data1 + " received in async1");
//     callback(data1);
//     return data1;
//   }, 1000);
// }
// function async2(data1) {
//   let data2;
//   setTimeout((data1_1) => {
//     data2 = data1_1 + " : data2";
//     console.log(data2 + " Received in async2");
//     return data2;
//   }, 1000 , data1);
// }
// async1((data1) => {
//   async2(data1);
// });

// above we have only two async functions which are dependant of each other, but if We would have 10 functions then we would be calling those functions inside callbacks recursively.
// And that is called callback HTMLElement.
// ------------------------------------------------
