const loadScript = (src)=>{
    let p = new Promise((resolve,reject)=>{
        let script = document.createElement('script')
        script.src = src 
        document.body.append(script)
    
        script.onload = () =>{
            resolve(1)
        }
        script.onerror = () =>{
            reject(0)
            console.log('Unable to load')
        }

    })
    return p
}

let p1 = loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
p1.then((value)=>{
    console.log(value)
    return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
}).catch((error)=>{
    console.log('ERRROR OCCURED')
})



// Put .catch at last as if any of .then fails it will get to next closet .catch