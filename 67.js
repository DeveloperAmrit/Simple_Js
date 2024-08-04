let p1 = new Promise((resolve,rejct)=>{
    setTimeout(() => {
        // resolve('value 1')
        rejct(new Error('Error'))
    }, 1000);
})
let p2 = new Promise((resolve,rejct)=>{
    setTimeout(() => {
        resolve('value 2')
    }, 2000);
})
let p3 = new Promise((resolve,rejct)=>{
    setTimeout(() => {
        resolve('value 3')
    }, 3000);
})

// obviously p1,p2,p3 will run parallely

// (1) .all  | if we want to print something when all these three are done

let promise_all = Promise.all([p1,p2,p3])      // will return a promise with resolve(<array of resolved values>)
promise_all.then((value)=>{
    console.log('1 .all = ',value)                         // will print a array [value 1, value 2, value 3]
})

// if any one is rejected it will return error 

// (2) .allSettled | if we want only those who are resolved

let promise_allset = Promise.allSettled([p1,p2,p3])
promise_allset.then((value)=>{
    console.log('2 .allset = ',value)
})

// (3) .race | if we want the first one

let promise_race = Promise.race([p1,p2,p3])
promise_race.then((value)=>{
    console.log('3 Race winner is ',value)
})

// if error comes first it will return error

// (4) .any | for race only between resolving promises

let promise_any = Promise.any([p1,p2,p3])
promise_any.then((value)=>{
    console.log('4 .any = ',value)
})