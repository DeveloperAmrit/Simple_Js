function loadScript(src, callback, name){
    let script = document.createElement('script')
    script.src = src
    document.head.append(script)

    // .onload property

    script.onload = ()=>{
        callback(null,src,name)         // we are going to keep the format of callback function like hello(error,url,name)
    }

    // .onerror property

    script.onerror = ()=>{
        callback(new Error('Error on loading '+name+' src : '+src),src,name)  // just passing arguments to the function that will be passed as callback
    }
}

function hello(error,url,name){
    if(error){
        console.log(error)
    }
    else{
        console.log('Script loaded '+name+' url '+url)
    }
}


loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',hello,'Bootstrap1')  // will be loaded
loadScript('https://hakallaka',hello,'Bootstrap2')        // will give error