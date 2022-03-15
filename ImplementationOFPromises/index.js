const PENDING = 0
const FULLFILLED = 1
const REJECTED = 2

function customPromise (executor){
    let state = PENDING  
    let value = null
    let handlers = []
    let catchers = []

    function resolve(result){
        if(state !== PENDING) return;
        state = FULLFILLED
        value = result

        handlers.forEach((h)=> h(value))
    }

    function reject(err){
        if(state !== PENDING) return;
        state = REJECTED
        value = err
        
        catchers.forEach((c) => c(value))
    }

    this.then = function ( SuccessCallback){
        if(state === FULLFILLED){
            SuccessCallback(value )
        } else {
            handlers.push(SuccessCallback)
        }
    }

    this.catch = function ( FailureCallback){
        if(state === REJECTED){
            FailureCallback(value)
        } else {
            catchers.push(FailureCallback)
        }
    }
    executor(resolve , reject);
}

const doWork = (res , rej) => {
    if(2==20){
        setTimeout(() => {
            res("Resolved your primise")
        }, 2000);
    } else {
        setTimeout(() => {
            rej("Promise Rejected")
        }, 2000);
    }
}

let greetMsg = new customPromise(doWork); // greetMsg is an object of customPromise type.
//  customPromise is a function constructor.
//  doWork is the executor function, means that async function on which our subsequent actions are depended.
greetMsg.then((val)=> {
    console.log("then log " , val)
})

greetMsg.catch((val)=> {
    console.log('catch log' , val)
})