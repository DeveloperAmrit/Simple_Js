/*
var -> Global Variable
let -> block variable
const -> constant
*/

/* Rules for writing variables

> Must start  with $ , _ or a letter
> Case sensitive

*/

let a = "Amrit"
var b = "Alok"

{
    let a = "This is inside block" // Will not change global let
    var b = "This is inside block" // Will change global var

    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)

/* 
var c = 7
var c = 8  can be redecleared

let d = 9 
let d = 11 Will throw error
*/