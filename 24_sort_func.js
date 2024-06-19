let arr1 = [5,43,56,234,63,667,24,0,1,3,6]

// 1

arr1.sort()
console.log(arr1)

/*
sort() takes a compare function if not provided it sorts alphabetically
*/

// 2

const compareInAscending = (a,b)=>{
    return a - b
}

arr1.sort(compareInAscending)
console.log(arr1)

// 3

const compareInDescending = (a,b)=>{
    return b - a
}

arr1.sort(compareInDescending)
console.log(arr1)


