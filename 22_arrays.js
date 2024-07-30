let arr1 = [1,'Hello',true,4.09,null,undefined,NaN]

let arr2 = [1,2,3,,4,5,6]

// LENGTH

console.log(arr2.length)

// Arrays are mutable

arr2[0] = 'Replaced'
arr2[6] = 'New'

console.log(arr2)
