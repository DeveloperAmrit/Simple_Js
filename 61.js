let promise = new Promise((resolve,reject)=>{
    console.log('Hello')
    resolve(56)
    reject(12)
})                           // prints hello    | no need of calling promise, it executes as it is

// resolve and reject are two by default callback provided by js

console.log(promise)       // prints 56 as code has been resolved   

/* 
----------
there are two properties of promise 

1) State : Initially pending then changes to either "fulfilled" IF RESOLVED (or) "rejected" IF REJECTED
2) Result : Initially undefined then changes to either value IF RESOLVED (or) error IF REJECTED

----------

Promises are used for parallel execution of code

1 fetch google home page => cosole.log('Google.com home page fetched')
2 fetch data from API => console.log('API Data fetched')
3 fetch pictures from server => console.log('pictures fetched')
4 console.log('Downloading')
5 other code

what will you want that
4 runs then 1,2,3 run parallel without stopping code execution of 5

can do this by making 1,2,3 as promises 

---------
*/