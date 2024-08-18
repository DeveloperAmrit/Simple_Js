// (1) fetchAPI

function fetchAPI(url){
    let p1 = fetch(url)
    p1.then((response)=>{                  // response bada hota hai, isko nikalne me time lag skta hai isiliye 2 stage
        
        // stage 1
        console.log(response)
        console.log(response.status)
        console.log(response.ok)        // take action right here if ok = false

        // stage 2
        return response.json()      

    }).then((value2)=>{

        console.log(value2)

    })
}
fetchAPI('https://official-joke-api.appspot.com/random_joke')
console.log('Hello, Fetching url...')

/*
>>>>Getting a response is a two stage process.

1) We get "An object of Response class containing 'status' and 'ok'"

status =  the http status code (number) 
ok = true if http status code is 200-299

methods : (body reading methods)

.text() -> gives string 
.json() -> gives JSON        // can use only one of these, cannot do multiple (will give error)
.formData()
.blob()
2) We get "A JSON object"

*/