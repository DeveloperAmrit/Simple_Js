const fetchAPI = (url,request_headers)=>{
    let p1 = fetch(url)
    p1.then((response)=>{

        // Properties : status and ok
        console.log(response.status)
        console.log(response.ok)
        
        // Propeties : headers
        console.log(response.headers)

        return p1.json()
    }).then((response)=>{
        console.log(response)
    })
}

// example of request_header
let header = 
{
headers:{
    Authetication : 'secret'
}
}

fetchAPI('https://official-joke-api.appspot.com/random_joke')