// 1

console.log("abc\"".length)

// 2

let a = 'Amrit Kumar Yadav'
let b = 'A'
console.log("The sentence "+a+" "+(a.includes(b)? "" : "donot")+" includes "+b)

console.log(a.endsWith('v'))
console.log(a.startsWith('v'))

// 3

console.log(a.toLowerCase())

// 4

let c = 'Please give Rs 1000'
let arr1 = c.split(' ')
let amount = undefined
for(i of arr1){
    if(parseInt(i)!=NaN){
        amount = i
    }
}
console.log(amount)

// 5

let d = 'Amrit kumar yadav'

d[3] = 'R'     //Donot do anything
console.log(d)