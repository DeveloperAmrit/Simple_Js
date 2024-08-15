const func1 = async()=>{
    console.time('1')
    let p1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(1)
        }, 2000);
    })
    p1.then((value)=>[
        console.log(value)
    ])

    let p2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(2)
        }, 1000);
    })
    p2.then((value)=>[
        console.log(value)
    ])

    let p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error('P3 failed'))
        },3000)
    })
    let p4 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error('P4 failed'))
        },2000)
    })
    console.timeEnd('1')         // will show 0.5 ms, as it is running parallel to p1,p2,p3 and not waiting for them to be compleated
    return [p1,p2,p3,p4]
}

func1()