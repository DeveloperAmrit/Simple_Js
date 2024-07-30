// A function to load external scripts, creates a script tag in head with src passed 

function loadScript(src, callback){
    let script = document.createElement('script')
    script.src = src
    document.head.append(script)

    //detecting wheter loaded or not

    script.onload = ()=>{
        callback(src);
    }

    // detecting errors
    script.onerror = ()=>{
        console.log('ERROR during loading url : ',src)
    }

}

function bootstrapJsLoaded(url){
    console.log('Bootstrap js loaded link : ',url)
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', bootstrapJsLoaded)

// Simple thing : passed function as argument and runned it onload