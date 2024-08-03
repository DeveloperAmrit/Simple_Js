let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Resolve after 2 seconds")
        resolve(1)
    }, 2000);
})

p1.then((value)=>{                             // .then() for p1
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Resolve p2")
            resolve(2)
        },2000)
    })
    return p2
}).then((value)=>{                         // .then() for p2
    console.log(value)       
})   

