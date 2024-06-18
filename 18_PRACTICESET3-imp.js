// 1

let obj = {
    harry : 98,
    rohan : 70,
    aakash : 8
}

for(let i=0;i<Object.keys(obj).length;i++){
    console.log('Marks of '+Object.keys(obj)[i]+' is '+Object.values(obj)[i])
}

// 2

for(i in obj){
    console.log('Marks of '+i+' is '+obj[i])
}

// 3 

// let correctpassword = 'lop3432'
// let inputpassword = prompt('Enter password \n')

// while(inputpassword != correctpassword){
//     console.log('Invalid password')
//     inputpassword = prompt('Enter password \n')
// }

// 4

const mean =  (x)=>{
    let s = 0
    for(i of x){
        s += i
    }
    let m = (s/x.length)
    console.log('The average of '+x+' is '+m)
    return m
}

l1 = [1,2,3,4]
mean(l1)




