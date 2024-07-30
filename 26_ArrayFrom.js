/* 
let us consider we have 
let a = document.getElementsByClassName('box')

Here a is an object but not an array 

to make an array from a we use

let a_arr = Array.From(a)

*/

let a = 'Harry'
let b = Array.from(a)
console.log(b)
