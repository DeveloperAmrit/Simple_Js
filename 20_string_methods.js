let a = 'Amrit'

// 1 LENGTH

console.log(a.length)

// 2 CASE CHANGE These DONOT do permanent changes to actual string

a.toUpperCase()
console.log(a)
console.log(a.toUpperCase())

a.toLowerCase()
console.log(a)
console.log(a.toLowerCase())

// 3 SLICE These DONOT do permanent changes to actual string

console.log(a.slice(2,4))         // DONOT includes 4 
console.log(a.slice(2) )          // from index 2 to end

// 4 REPLACE These DONOT do permanent changes to actual string

let b = 'Amrit bhai bhai'
let c = b.replace('bhai','bhau')    // changes first occurance only
let c2 = b.replaceAll('bhai','bhau')    // changes all occurances
console.log(b)
console.log(c)
console.log(c2)

// 5 SPLIT

let f = b.split('')                // make array by spltting string from all points of occurcance of ''
let g = b.split('i')                // make array by spltting string from all points of occurcance of 'i'
console.log(f)
console.log(g)

// 6 CONCAT

let d = b.concat(' is ',a, ' bhai')         // is same as let d = b+' is ' + a + 'bhai'
console.log(d)



// 7 TRIM

let e = '    hello     my name is Amrit      '

console.log(e)
console.log(e.trim())


// ----------> Strings are IMMUTABLE in Js

a[2] = 'B' // Donot changes anything

// but the varible can be reassigned
a = "Alok"    // changes a