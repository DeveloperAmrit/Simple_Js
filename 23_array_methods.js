let arr1 = [1,2,3,4,5]

// 1 toString

let a = arr1.toString()
console.log(a, typeof a)

// 2 join

let b = arr1.join('_')
console.log(b,typeof b)

// 3 pop and push || Causes permanent changes in original array 

let c = arr1.pop()        // pop removes last element from original array and returns it
console.log(arr1)
console.log(c)   

arr1.push(c)
console.log(arr1)        // push adds element to the end of the original array

// 4 shift and unshift || Causes permanent changes in original array

let d = arr1.shift()
console.log(arr1)
console.log(d)

arr1.unshift(d)
console.log(arr1)

// 5 delete operator || Causes permanent changes in original array

delete arr1[1]                    // replaces the element with undefined
console.log(arr1 ,arr1.length , arr1[1])

// 6 concat

let arr2 = [5,'Second element of arr2',9.56]
let arr3 = arr1.concat(arr2) 
let arr4 = arr1 + arr2            // it does not work arr4 != arr3

console.log(arr3)
console.log(arr4)