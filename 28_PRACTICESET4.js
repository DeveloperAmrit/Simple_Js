// 1,2
// console.log("\n Q1 answer \n")


// let arr1 = []
// let i = ''

// alert('Pass "stop" to stop')

// while(i!='stop'){
//     i = prompt('Enter the number \t enter stop to stop')
//     i!='stop'? arr1.push(parseInt(i)) : console.log('Your final array is ')
//     console.log(arr1)
// }

// 3

const arr2 = [10,20,30,55,79,12]

let arr3 = arr2.filter((value,index,array)=>{
    return parseInt(value)%10 == 0
})
console.log(arr3)

// 4

let arr4 = arr2.map((value,index,array)=>{
    return value*value
})
console.log(arr4)

// 5

let n = parseInt(prompt('Whose factorial you want'))
let arr5 = []
let i = 1

while(i!=n+1){
    arr5.push(i)
    i++
}
console.log(arr5)
let factorial = arr5.reduce((h1,h2)=>{
    return h1*h2
})
alert(`The value of ${n}! is ${factorial}`)