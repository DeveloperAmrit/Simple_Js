let arr1 = ['A','B','C','D','E','F','G','H']

// 1 Simple for loop
console.log('\n This is for 1')


for(let i=0; i<arr1.length; i++){
    console.log(arr1[i])
}

// 2 for each loop
console.log('\n This is for 2')


arr1.forEach((element,index,array)=>{
    console.log(index)
    console.log(element)
})

// 3 for in loop
console.log('\n This is for 3')


for(i in arr1){
    console.log(arr1[i])     // i is index of arr1
}

// 4 for of loop
console.log('\n This is for 4')


for(i of arr1){
    console.log(i)    // i is element of arr1
}