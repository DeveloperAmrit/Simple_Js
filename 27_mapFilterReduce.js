// 1 MAP

// for each is used to work on elements of an array donot returns anything
// map  is used to create a new array from an old array can return something

let arr1 = [1,2,3,4,5,6,7,8]

let arr2 = arr1.map((value,index,array)=>{
    return value+1
})
console.log(arr2)

// let arr3 = arr1.forEach((value,index,array)=>{
//     return value+1
// })
// console.log(arr3)             Doesnot work 


// 2 FILTER

// Filters values which passes a test
let arr4 = arr1.filter((value,index,array)=>{
    return value<5
}) 
console.log(arr4)

// 3 REDUCE
/* 
let given function be gf
runs gf for first two elements and gets a result r1
runs gf for r1 and third element and gets a result r2
runs gf for r2 and fourth element and gets a result r3
and so on ...
*/ 

let arr = [1,2,3,4,5,6]

let a = arr.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a)    

/*
What it did?
1+2 = 3
3+3 = 6
6+4 = 10
10+5 = 15
15+6 = 21
so a = 21
*/

