// request header we send with our request and response header is that what we recieve
// GET and POST are used to send and fetch data from sever, POST can transfer greater amount of data


// GET request

const  GETreq = async ()=>{
    let p1 = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let response = await p1.json()
    return response
}

const mainFuncGET = async()=>{
    let get_res = await GETreq()
    console.log(get_res)
}

mainFuncGET()

// POST request

const POSTreq = async (todo) =>{
    let options =  {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    let p1 = await fetch('https://jsonplaceholder.typicode.com/posts',options)
    let response = await p1.json()
    return response
    
}

const mainfuncPOST = async () =>{
    let todo = {
        title:'Amrit',
        body:'Halo',
        userID:420
    }
    let a = await POSTreq(todo)
    console.log(a)
}

mainfuncPOST()