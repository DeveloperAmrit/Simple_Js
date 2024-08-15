// (1) 

const loadScript = (src)=>{
    let p1 = new Promise((resolve,reject)=>{
        const script = document.createElement('script')
        script.src = src
        document.body.append(script)
        script.onload = ()=>{
            resolve(`1 Successfully loaded ${src}`)
        }
        script.onerror = ()=>{
            reject(new Error(`Failed to load ${src}`))
        }
    })

    p1.then((value)=>{
        console.log(value)
    },(error)=>{
        console.log(error)
    })
    return p1
}
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')

// (2)

const loadScript2 = async (src)=>{
    let p1 = new Promise((resolve,reject)=>{
        const script = document.createElement('script')
        script.src = src
        document.body.append(script)
        resolve(`2 Succesfully loaded ${src}`)
    })

    let a = await p1
    console.log(a)
    return a
}

loadScript2('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')

// (3)

const sol3fun = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(new Error('3 Please this is not acceptable'))
        }, 3000);
    })
}
let a = async()=>{
    try{
        let b = await sol3fun()
        console.log(b)
    }
    catch(error){
        console.log(`Handled`,error)
    }
    // try will work here, yes out of setTimeout, because try will wait due to await
}
a()

// (4) 

let p1 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(41)
        }, 2000);
    })
}
let p2 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(42)
        }, 3000);
    })
}
let p3 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(43)
        }, 4000);
    })
}

const run = async()=>{
    console.time('1')
    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()
    console.timeEnd('1')
    console.log(a1,a2,a3)                      // this consumes 9 seconds as p1,p2,p3 run in series.
}
// run()

// use Promise.all instead of this, as it runs p1,p2,p3 in parallel

const run2 = async()=>{
    console.time('2')
    let a1 = p1()
    let a2 = p2()
    let a3 = p3()
    let a1a2a3 = await Promise.allSettled([a1,a2,a3])
    console.timeEnd('2')
    console.log(a1a2a3)

}
run2()

