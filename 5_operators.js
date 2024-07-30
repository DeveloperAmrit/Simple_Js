let a = 45
let b = 4

// ARITHEMETIC OPERATORS

console.log(
    a+b
    ,a-b
    ,a*b
    ,a**b
    ,a/b
    
    ,a%b
    ,a++  // 45
    ,a--  // 46
    ,a    // 45
    ,++a  // 46
    ,--a  // 45
    ,a   // 45
)

/*

a++ -> prints and and then increase value of a 
a-- -> prints and then decreases value of a 

*/

// ASSIGNMENT OPERATORS 
c  = 6

c += 1 
console.log(c)
c -= 1
console.log(c)
c *= 1
console.log(c)
c /= 1
console.log(c)
c %= 4
console.log(c)
c **= 2
console.log(c)

// COMPARISON OPERATORS 

let d = 7
let e = "7"

console.log("d == e is", d==e)          // Requires only same value 
console.log("d != e is", d!=e)
console.log("d === e is", d===e)       // Requires same data type and same value
console.log("d !== e is", d!==e)

// LOGICAL OPERATORS 

let f = 9 
let g = 89
let h = 11
let i = 3

console.log((f<g)||(h<i))
console.log((f<g)&&(h<i))
console.log(!false)