const avg1 = (x,y)=>{
    let a = (x+y)/2
    return a
}

// is same as

function avg2(x,y){
    let a = (x+y)/2
    return a
}

// see

console.log(avg1(7,8))
console.log(avg2(7,8))