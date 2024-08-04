let p1 = new Promise((resove,reject)=>{
    console.log("p1 is not resolved yet")
    setTimeout(() => {
        resove(1)
    }, 2000);
})

p1.then((value)=>{
    console.log('p1 is resolved')
})

p1.then((value)=>{
    console.log('HURRAY')
})

// iN THIS WAY WE CAN PARALLELY RUN SOME CODE AFTER P1 IS RESOLVED