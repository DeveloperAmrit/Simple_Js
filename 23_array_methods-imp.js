let arr1 = [1,2,3,4,5]

// 1 toString
console.log("\n This is for 1 \n")

let a = arr1.toString()
console.log(a, typeof a)

// 2 join
console.log("\n This is for 2 \n")


let b = arr1.join('_')
console.log(b,typeof b)

// 3 pop and push || Causes permanent changes in original array 
console.log("\n This is for 3 \n")


let c = arr1.pop()        // pop removes last element from original array and returns it
console.log(arr1)
console.log(c)   

arr1.push(c)
console.log(arr1)        // push adds element to the end of the original array and returns new array length

// 4 shift and unshift || Causes permanent changes in original array
console.log("\n This is for 4 \n")


let d = arr1.shift()    // shift removes first element from original array and returns it
console.log(arr1)
console.log(d)

arr1.unshift(d)
console.log(arr1)       // unshift adds element to the start of the original array and returns new array length

// 5 delete operator || Causes permanent changes in original array
console.log("\n This is for 5 \n")


delete arr1[1]                             // replaces the element with undefined
console.log(arr1 ,arr1.length , arr1[1])

// 6 concat || Donot changes original arrays
console.log("\n This is for 6 \n")


let arr2 = [5,'Second element of arr2',9.56]
let arr3 = arr1.concat(arr2) 
let arr4 = arr1 + arr2            // it does not work arr4 != arr3

console.log(arr3)
console.log(arr4)

// 7 sort || Causes permanent changes in original array
console.log("\n This is for 7 \n")


let arr5 = [8,5,300,7,278,9,0,1]          // sorts alphabetically assuming them string
arr5.sort()
console.log(arr5)                        // SURPRISING RESULTS [0, 1, 278, 300, 5, 7, 8, 9]


// 8 reverse || Causes permanent changes in original array
console.log("\n This is for 8 \n")


let arr6 = [1,2,3,4,5,6]
arr6.reverse()
console.log(arr6)

// 9 splice || Causes permanent changes in original array
// splice (start index, number of elements to delete, element 1 to be added, element 2 to be added)
console.log("\n This is for 9 \n")


let arr7 = [0,1,2,3,4,5,6,7,8]

let e = arr7.splice(2,1,98,99)      // returns deleted elements array

console.log(arr7 , e)

// 10 slice || Donot changes original array
console.log('\n This is for 10 \n')


let arr8 = [0,1,2,3,4,5,6,7,8]

let arr9 = arr8.slice(2,5)     // Exclude last index
console.log(arr9)